package com.example.sport_saga.repositiory;


import com.example.sport_saga.modal.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderRepository extends JpaRepository<Orders, Integer> {
}
