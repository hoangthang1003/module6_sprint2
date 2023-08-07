package com.example.sport_saga.service.OrderDetail.impl;



import com.example.sport_saga.modal.OrderDetail;
import com.example.sport_saga.repositiory.IOrderDetailRepository;
import com.example.sport_saga.service.OrderDetail.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderDetailService implements IOrderDetailService {

    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;
    @Override
    public void save(OrderDetail orderDetail) {
        iOrderDetailRepository.save(orderDetail);
    }

    @Override
    public List<OrderDetail> findAll(Integer id) {
        return iOrderDetailRepository.findOrderDetailByCustomer_IdCustomer(id);
    }

    @Override
    public List<OrderDetail> findAllByOrder(Integer id) {
        return iOrderDetailRepository.findOrdersDetailByOrders_IdOrders(id);
    }
}
