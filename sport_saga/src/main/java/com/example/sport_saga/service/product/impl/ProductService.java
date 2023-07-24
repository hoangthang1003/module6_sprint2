package com.example.sport_saga.service.product.impl;

import com.example.sport_saga.modal.Product;
import com.example.sport_saga.repositiory.product.IProductRepository;
import com.example.sport_saga.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Page<Product> showList(Pageable pageable) {
        Pageable validPageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), pageable.getSort());
        return iProductRepository.findAllProduct(validPageable);
    }

    @Override
    public Page<Product> showListByGender(Pageable pageable,Boolean gender) {
        return iProductRepository.findAllProductByGender(pageable,gender);
    }

    @Override
    public Product findById(Integer idProduct) {
        return iProductRepository.findById(idProduct).get();
    }
}
