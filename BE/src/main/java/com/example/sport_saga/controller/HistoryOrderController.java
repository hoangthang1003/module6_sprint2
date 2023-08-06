//package com.example.sport_saga.controller;
//
//
//
//import com.example.sport_saga.service.IOrderDetailService;
//import com.example.sport_saga.service.IOrderService;
//import com.example.sport_saga.service.account_user.IAccountUserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//@Controller
//@CrossOrigin("*")
//public class HistoryOrderController {
//    @Autowired
//    private IOrderService orderService;
//
//    @Autowired
//    private IOrderDetailService orderDetailService;
//
//    @Autowired
//    private IAccountUserService userService;
//
//    @GetMapping
//    public ResponseEntity<?> historyOrder(@RequestParam(value = "email") String email){
//        return new ResponseEntity<>();
//    }
//}