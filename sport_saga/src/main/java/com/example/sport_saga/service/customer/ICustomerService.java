package com.example.sport_saga.service.customer;

import com.example.sport_saga.modal.Customer;

public interface ICustomerService {
    Customer findByAccount(String name);

}
