package com.example.sport_saga.service.customer.imp;

import com.example.sport_saga.dto.CustomerDTO;
import com.example.sport_saga.dto.EmployeeDTO;
import com.example.sport_saga.modal.AccountUser;
import com.example.sport_saga.modal.Customer;
import com.example.sport_saga.modal.Employee;
import com.example.sport_saga.repositiory.ICustomerRepository;
import com.example.sport_saga.repositiory.account.IAccountUserRepository;
import com.example.sport_saga.service.customer.ICustomerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Autowired
    private IAccountUserRepository iAccountUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Customer findByAccount(String name) {
        return iCustomerRepository.findCustomerByAccountUser_NameAccount(name);
    }

    @Override
    public void createCustomer(CustomerDTO customerDTO) {
        iAccountUserRepository.createAccountUser(customerDTO.getAccountUser().getNameAccount(),
                passwordEncoder.encode(customerDTO.getAccountUser().getPasswordAccount()));
        AccountUser account = iAccountUserRepository
                .findAccountUserByNameAccount(customerDTO.getAccountUser().getNameAccount());
        Customer customer = new Customer();
        customer.setAccountUser(account);
        BeanUtils.copyProperties(customerDTO, customer);
        iCustomerRepository.saveCustomer(
                customer.getAddress(),
                customer.getDateOfBirth(),
                customer.getEmail(),
                customer.getGender(),
                customer.getIdCard(),
                customer.getImgCustomer(),
                customer.getName(),
                customer.getPhoneNumber(),
                account.getId());
    }

    @Override
    public Page<Customer> showList(Pageable pageable) {
        return iCustomerRepository.showListCustomer(pageable);
    }
}
