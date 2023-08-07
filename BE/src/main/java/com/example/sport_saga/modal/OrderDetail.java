package com.example.sport_saga.modal;
import javax.persistence.*;
@Entity
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_order_detail")
    private Integer id;
    @Column(name = "quantity_order")
    private Integer quantityOrder;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_product")
    private Product product;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_order")
    private Orders orders;
    @ManyToOne
    @JoinColumn(columnDefinition = "id_user")
    private Customer customer;

    public OrderDetail() {
    }

    public OrderDetail(Integer id, Integer quantityOrder,
                       Product product, Orders orders, Customer customer) {
        this.id = id;
        this.quantityOrder = quantityOrder;
        this.product = product;
        this.orders = orders;
        this.customer = customer;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantityOrder() {
        return quantityOrder;
    }

    public void setQuantityOrder(Integer quantityOrder) {
        this.quantityOrder = quantityOrder;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Orders getOrders() {
        return orders;
    }

    public void setOrders(Orders orders) {
        this.orders = orders;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}