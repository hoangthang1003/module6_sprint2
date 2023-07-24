package com.example.sport_saga.repositiory;

import com.example.sport_saga.modal.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    Customer findCustomerByAccountUser_NameAccount(String name);

}
