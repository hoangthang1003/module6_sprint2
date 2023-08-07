package com.example.sport_saga.service.Orders.impl;

import com.example.sport_saga.modal.Orders;
import com.example.sport_saga.repositiory.IOrderRepository;
import com.example.sport_saga.service.Orders.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository iOrderRepository;


    @Override
    public void save(Orders orders) {
        iOrderRepository.save(orders);
    }

    @Override
    public Orders findById(Integer id) {
        return iOrderRepository.findById(id).get();
    }
}
