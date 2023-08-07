package com.example.sport_saga.service.cart.impl;


import com.example.sport_saga.config.Config;
import com.example.sport_saga.dto.RequestPayment;
import com.example.sport_saga.dto.ResponsePayment;
import com.example.sport_saga.modal.Cart;
import com.example.sport_saga.repositiory.cart.ICartRepository;
import com.example.sport_saga.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.Inet4Address;
import java.net.URLEncoder;
import java.net.UnknownHostException;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public List<Cart> findAllCart(String name) {
        return iCartRepository.findCartByCustomer_AccountUser_NameAccount(name);
    }

    @Override
    public Cart existCart(int customerId, int productId) {
        return iCartRepository.findCartByCustomer_IdCustomerAndProduct_IdProduct(customerId, productId);
    }

    @Override
    public void decrease(int quantity) {

    }

    @Override
    public void increase(int quantity) {

    }

    @Override
    public void add(Cart cart) {
        iCartRepository.save(cart);
    }

    @Override
    public void delete(Cart cart) {
        iCartRepository.delete(cart);
    }

    @Override
    public Cart findById(int id) {
        return iCartRepository.findById(id).get();
    }

    @Override
    public List<Cart> findCartByCustomerId(int id) {
        return iCartRepository.findCartByCustomer_IdCustomer(id);
    }

    @Override
    public ResponsePayment payment(RequestPayment requestPayment) throws UnsupportedEncodingException {
        Inet4Address ip;
        try {
            ip = (Inet4Address) Inet4Address.getLocalHost();
        } catch (UnknownHostException e) {
            throw new RuntimeException(e);
        }
        String vnp_Version = "2.1.0";
        String vnp_Command = "pay";
        String vnp_TxnRef = Config.getRandomNumber(8);

        String vnp_TmnCode = Config.vnp_TmnCode;
        long amount = (long) (requestPayment.getTotalPrice()*100);
        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_BankCode", "NCB");

        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang thoi gian:" + vnp_TxnRef);
        vnp_Params.put("vnp_OrderType", "topup");
        vnp_Params.put("vnp_Locale", "vn");
        vnp_Params.put("vnp_ReturnUrl", Config.vnp_Returnurl);

        vnp_Params.put("vnp_IpAddr", String.valueOf(ip));


        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = Config.hmacSHA512(Config.vnp_HashSecret, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = Config.vnp_PayUrl + "?" + queryUrl;
        ResponsePayment responsePayment = new ResponsePayment();
        responsePayment.setMessage("Successfully");
        responsePayment.setStatus("Ok");
        responsePayment.setURL(paymentUrl);
        return responsePayment;
    }
}
