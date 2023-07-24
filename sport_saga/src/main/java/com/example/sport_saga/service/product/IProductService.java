package com.example.sport_saga.service.product;

import com.example.sport_saga.modal.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<Product> showList(Pageable pageable);

    Page<Product> showListByGender(Pageable pageable,Boolean gender);

    Product findById(Integer idProduct);
}
