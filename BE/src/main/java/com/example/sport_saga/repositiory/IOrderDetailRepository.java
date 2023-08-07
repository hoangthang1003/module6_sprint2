package com.example.sport_saga.repositiory;


import com.example.sport_saga.modal.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {
    List<OrderDetail> findOrderDetailByCustomer_IdCustomer(Integer id);
    List<OrderDetail> findOrdersDetailByOrders_IdOrders(Integer id);
}