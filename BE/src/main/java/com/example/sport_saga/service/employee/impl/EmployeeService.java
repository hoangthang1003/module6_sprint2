package com.example.sport_saga.service.employee.impl;


import com.example.sport_saga.dto.EmployeeDTO;
import com.example.sport_saga.modal.AccountUser;
import com.example.sport_saga.modal.Employee;
import com.example.sport_saga.repositiory.account.IAccountUserRepository;
import com.example.sport_saga.repositiory.employee.IEmployeeRepository;
import com.example.sport_saga.service.employee.IEmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    private IEmployeeRepository iEmployeeRepository;
    @Autowired
    private IAccountUserRepository iAccountUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public Page<Employee> showList(Pageable pageable) {
        Pageable validPageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), pageable.getSort());
        return iEmployeeRepository.showListEmployee(validPageable);
    }

    @Override
    public Page<Employee> findByEmployee(String name, String account, String phoneNumber, Pageable pageable) {
        return iEmployeeRepository.findByAll(name, account, phoneNumber, pageable);
    }

    @Override
    public Page<Employee> findByName(String name, Pageable pageable) {
        return iEmployeeRepository.findByName(name, pageable);
    }

    @Override
    public Page<Employee> findByPhone(String phone, Pageable pageable) {
        return iEmployeeRepository.findByPhone(phone,pageable);
    }


    @Override
    public void createEmployee(EmployeeDTO employeeDTO) {
        iAccountUserRepository.createAccountUser(employeeDTO.getAccount().getNameAccount(),
                passwordEncoder.encode("Abc@123"));
        AccountUser account = iAccountUserRepository
                .findAccountUserByNameAccount(employeeDTO.getAccount().getNameAccount());
        Employee employee = new Employee();
        employee.setAccountUser(account);
        BeanUtils.copyProperties(employeeDTO, employee);
        iEmployeeRepository.saveEmployee(
                employee.getNameEmployee(),
                employee.isGender(),
                employee.getDateOfBirth(),
                employee.getSalary(),
                employee.getImage(),
                employee.getAddress(),
                employee.getPhoneNumber(),
                employee.getEmail(),
                employee.getPosition(),
                account.getId());
    }

    @Override
    public Employee findEmployeeById(Integer id) {
        return iEmployeeRepository.findEmployeeById(id);
    }

    @Override
    public void deleteByIdEmployee(Integer idEmployee) {
        iEmployeeRepository.deleteEmployeeById(idEmployee);
    }
}

