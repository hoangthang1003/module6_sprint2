package com.example.sport_saga.service.customer;

import com.example.sport_saga.dto.CustomerDTO;
import com.example.sport_saga.modal.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICustomerService {

    Customer findByAccount(String name);
    void createCustomer(CustomerDTO customerDTO);

    Page<Customer> showList(Pageable pageable);
}
