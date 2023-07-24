//package com.example.sport_saga.service;
//
//import com.example.sport_saga.dto.EmployeeDTO;
//import com.example.sport_saga.modal.Employee;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//
//public interface IEmployeeService {
//    Page<Employee> showList(Pageable pageable);
//
//    Page<Employee> findByEmployee(String name,String account,String phoneNumber,Pageable pageable);
//
//
////    void addEmployee(String nameEmployee, Boolean gender, LocalDate dateOfBirth, double salary,
////                     String image, String address,
//
//    Page<Employee> findByName(String name, Pageable pageable);
//    Page<Employee> findByPhone(String phone, Pageable pageable);
//
//    void createEmployee(EmployeeDTO employeeDTO);
//
//    //    void createEmployee(EmployeeDTO employeeDTO);
//    Employee findEmployeeById(Integer id);
//
//    void deleteByIdEmployee(Integer idEmployee);
//
//}