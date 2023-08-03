package com.example.sport_saga.dto;



public class CartCreateDTO {
    private Integer quantity;
    private boolean status = true;
    private Integer product;

    public CartCreateDTO(Integer quantity, boolean status, Integer product, AccountUserDTO accountUserDTO) {
        this.quantity = quantity;
        this.status = status;
        this.product = product;
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

    public Integer getProduct() {
        return product;
    }

    public void setProduct(Integer product) {
        this.product = product;
    }
}
