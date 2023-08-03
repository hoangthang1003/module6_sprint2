package com.example.sport_saga.dto;


public class UpdateCartDTO {
    private Integer quantity;
    private Integer product;

    public UpdateCartDTO() {
    }

    public UpdateCartDTO(Integer quantity, Integer product) {
        this.quantity = quantity;
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getProduct() {
        return product;
    }

    public void setProduct(Integer product) {
        this.product = product;
    }
}