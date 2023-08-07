package com.example.sport_saga.controller;



import com.example.sport_saga.modal.Customer;
import com.example.sport_saga.modal.OrderDetail;
import com.example.sport_saga.security.jwt.JwtProvider;
import com.example.sport_saga.security.jwt.JwtTokenFilter;
import com.example.sport_saga.service.OrderDetail.IOrderDetailService;
import com.example.sport_saga.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/user/order-detail")
@CrossOrigin("*")
public class OrderDetailController {

    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private IOrderDetailService iOrderDetailService;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public List<OrderDetail> findAllOrderByCustomer(HttpServletRequest request , @PathVariable("id") Integer id){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = iCustomerService.findByAccount(name);
        return iOrderDetailService.findAllByOrder(customer.getId());
    }
}