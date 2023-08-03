package com.example.sport_saga.service.cart.impl;


import com.example.sport_saga.modal.Cart;
import com.example.sport_saga.repositiory.cart.ICartRepository;
import com.example.sport_saga.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public List<Cart> findAllCart(String name) {
        return iCartRepository.findCartByCustomer_AccountUser_NameAccount(name);
    }

    @Override
    public Cart existCart(int customerId, int productId) {
        return iCartRepository.findCartByCustomer_IdCustomerAndProduct_IdProduct(customerId, productId);
    }

    @Override
    public void decrease(int quantity) {

    }

    @Override
    public void increase(int quantity) {

    }

    @Override
    public void add(Cart cart) {
        iCartRepository.save(cart);
    }

    @Override
    public void delete(Cart cart) {
        iCartRepository.delete(cart);
    }

    @Override
    public Cart findById(int id) {
        return iCartRepository.findById(id).get();
    }

    @Override
    public List<Cart> findCartByCustomerId(int id) {
        return iCartRepository.findCartByCustomer_IdCustomer(id);
    }
}
