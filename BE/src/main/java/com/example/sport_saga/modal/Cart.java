package com.example.sport_saga.modal;


import javax.persistence.*;

@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCart;
    private Integer quantity;
    private boolean status = true;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_customer")
    private Customer customer;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_product")
    private Product product;

    public Cart() {
    }
    public Cart(Integer idCart, Integer quantity, boolean status, Customer customer,
                Product product) {
        this.idCart = idCart;
        this.quantity = quantity;
        this.status = status;
        this.customer = customer;
        this.product = product;
    }


    public Integer getIdCart() {
        return idCart;
    }

    public void setIdCart(Integer idCart) {
        this.idCart = idCart;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}