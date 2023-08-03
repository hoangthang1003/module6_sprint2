package com.example.sport_saga.controller;

import com.example.sport_saga.modal.Product;
import com.example.sport_saga.modal.ProductType;
import com.example.sport_saga.service.product.IProductService;
import com.example.sport_saga.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/public/productType")
public class ProductTypeController {
    @Autowired
    private IProductTypeService productTypeService;
    @Autowired
    private IProductService iProductService;
    @GetMapping("")
    public ResponseEntity<List<ProductType>> getAllProductType(){
        List<ProductType> productTypeList = productTypeService.showAllType();
        return new ResponseEntity<>(productTypeList, HttpStatus.OK);
    }

    @GetMapping("/{type}")
    public ResponseEntity<List<Product>> findByProductType(@PathVariable Integer type){
        List<Product> productTypeList = iProductService.findByProductType(type);
        return new ResponseEntity<>(productTypeList, HttpStatus.OK);
    }
}