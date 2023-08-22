package com.example.sport_saga.service.product;

import com.example.sport_saga.modal.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<Product> showList(Pageable pageable);
    List<Product> findAll();

    Page<Product> showListByName(Pageable pageable, String name);

    Product findById(Integer idProduct);
    List<Product> findByProductType(Integer type);
    void save(Product product);


}
