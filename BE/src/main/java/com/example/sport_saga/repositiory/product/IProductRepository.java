package com.example.sport_saga.repositiory.product;

import com.example.sport_saga.modal.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {

    @Query(value = "select * from product",nativeQuery = true)
    Page<Product> findAllProduct(Pageable pageable);

    @Query(value = "select * from product where gender = :gender",nativeQuery = true)
    Page<Product> findAllProductByGender(Pageable pageable,@Param("gender") Boolean gender);

    @Modifying
    @Transactional
    @Query(value = "select 8 from product where id_product = :id_product",nativeQuery = true)
    Product findById(@Param("id_product") int idProduct);


}
