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

    @Query(value = "select * from product",nativeQuery = true)
    List<Product> findAll();

    @Query(value = "select * from product where name_product like %:name_product%",nativeQuery = true)
    Page<Product> findAllProductByName(Pageable pageable,@Param("name_product") String name);

    @Query(value = "select * from product where id_product = :id_product",nativeQuery = true)
    Product findById(@Param("id_product") int idProduct);
    @Query(value = "select * from product as p join product_type as pt on pt.id_type= p.id_type where pt.id_type = :id_type",nativeQuery = true)
    List<Product> findByProductType(@Param("id_type") Integer idType);


}
