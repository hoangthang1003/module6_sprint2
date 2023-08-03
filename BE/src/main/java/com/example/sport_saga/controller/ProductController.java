package com.example.sport_saga.controller;


import com.example.sport_saga.modal.Product;
import com.example.sport_saga.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/public/product")
public class ProductController {

    @Autowired
    private IProductService iProductService;

    @GetMapping("")
    public ResponseEntity<Page<Product>> listProduct(@RequestParam(value = "page", defaultValue = "0") int page) {
        Pageable pageable = PageRequest.of(page, 6);
        Page<Product> listProduct = iProductService.showList(pageable);
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    }
    @GetMapping("/product")
    public List<Product> productList() {
        return iProductService.findAll();
    }
    @GetMapping("/{id}")
    public Product findById(@PathVariable("id") Integer id) {
        return iProductService.findById(id);
    }

    @GetMapping("/gender/{gender}")
    public ResponseEntity<Page<Product>> showAll(@RequestParam(value = "page", defaultValue = "0") int page, @PathVariable Boolean gender){
        Pageable pageable = PageRequest.of(page, 6);
        Page<Product> listProduct = iProductService.showListByGender(pageable,gender);
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    };
}
