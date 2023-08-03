package com.example.sport_saga.repositiory.cart;

import com.example.sport_saga.modal.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findCartByCustomer_AccountUser_NameAccount(String accountName);

    Cart findCartByCustomer_IdCustomerAndProduct_IdProduct(Integer customerId, Integer productId);

    List<Cart> findCartByCustomer_IdCustomer(int id);
}
