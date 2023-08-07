package com.example.sport_saga.service.product.impl;

import com.example.sport_saga.modal.Product;
import com.example.sport_saga.repositiory.product.IProductRepository;
import com.example.sport_saga.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<Product> findAll() {
        return iProductRepository.findAll();
    }

    @Override
    public Page<Product> showListByGender(Pageable pageable, Boolean gender) {
        return iProductRepository.findAllProductByGender(pageable,gender);
    }

    @Override
    public Product findById(Integer idProduct) {
        return iProductRepository.findById(idProduct).get();
    }
    @Override
    public List<Product> findByProductType(Integer type) {
        return iProductRepository.findByProductType(type);
    }

    @Override
    public void save(Product product) {
        iProductRepository.save(product);
    }
}
