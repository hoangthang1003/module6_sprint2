package com.example.sport_saga.service.product.impl;

import com.example.sport_saga.modal.ProductType;
import com.example.sport_saga.repositiory.product.IProductTypeRepository;
import com.example.sport_saga.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {

    @Autowired
    private IProductTypeRepository iProductTypeRepository;

    @Override
    public List<ProductType> showAllType() {
        return iProductTypeRepository.showAllType();
    }


}
