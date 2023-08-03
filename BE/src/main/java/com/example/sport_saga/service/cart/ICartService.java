package com.example.sport_saga.service.cart;

import com.example.sport_saga.modal.Cart;

import java.util.List;

public interface ICartService {
    List<Cart> findAllCart(String name);
    Cart existCart(int customerId , int productId);

    void decrease(int quantity);
    void increase(int quantity);
    void add(Cart cart);
    void delete(Cart cart);
    Cart findById(int id);
    List<Cart> findCartByCustomerId(int id);
}
