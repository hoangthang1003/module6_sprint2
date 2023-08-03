package com.example.sport_saga.repositiory.product;

import com.example.sport_saga.modal.Product;
import com.example.sport_saga.modal.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductTypeRepository extends JpaRepository<ProductType,Integer> {

    @Query(value = "select * from product_type",nativeQuery = true)
    List<ProductType> showAllType();

}
