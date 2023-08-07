package com.example.sport_saga.service.OrderDetail;



import com.example.sport_saga.modal.OrderDetail;

import java.util.List;

public interface IOrderDetailService {
    void save(OrderDetail orderDetail);
    List<OrderDetail> findAll(Integer id);
    List<OrderDetail> findAllByOrder(Integer id);
}