package com.example.sport_saga.service.customer.imp;

import com.example.sport_saga.modal.Customer;
import com.example.sport_saga.repositiory.ICustomerRepository;
import com.example.sport_saga.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Override
    public Customer findByAccount(String name) {
        return iCustomerRepository.findCustomerByAccountUser_NameAccount(name);
    }
}
