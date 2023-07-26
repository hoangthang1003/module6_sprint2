package com.example.sport_saga.controller.customer;


import com.example.sport_saga.dto.CustomerDTO;
import com.example.sport_saga.dto.EmployeeDTO;
import com.example.sport_saga.modal.Customer;
import com.example.sport_saga.modal.Employee;
import com.example.sport_saga.security.jwt.JwtProvider;
import com.example.sport_saga.security.jwt.JwtTokenFilter;
import com.example.sport_saga.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CustomerController {
    @Autowired
    private ICustomerService iCustomerService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @GetMapping("/admin/customer")
    public ResponseEntity<Page<Customer>> listEmployee(@RequestParam(value = "page", defaultValue = "0") int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Customer> listCustomer = iCustomerService.showList(pageable);
        return new ResponseEntity<>(listCustomer, HttpStatus.OK);
    }


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/user/customer")
    public Customer findCustomer(HttpServletRequest request){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        return iCustomerService.findByAccount(name);
    }


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/public/create")
    public ResponseEntity<?> createCustomerWithAccount(@Valid @RequestBody CustomerDTO customerDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        iCustomerService.createCustomer(customerDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
