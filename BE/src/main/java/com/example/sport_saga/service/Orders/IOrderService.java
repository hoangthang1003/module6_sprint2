package com.example.sport_saga.service.Orders;

import com.example.sport_saga.modal.Orders;

public interface IOrderService {
    void save(Orders orders);
    Orders findById(Integer id);
}
