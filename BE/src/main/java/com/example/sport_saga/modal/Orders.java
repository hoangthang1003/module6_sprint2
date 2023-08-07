package com.example.sport_saga.modal;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_orders")
    private Integer idOrders;

    private String invoiceDate;

    private String totalPayment;
    private Boolean status;

    public Orders() {
    }

    public Orders(Integer idOrders, String invoiceDate, String totalPayment) {
        this.idOrders = idOrders;
        this.invoiceDate = invoiceDate;
        this.totalPayment = totalPayment;
    }

    public Orders(Integer idOrders, String invoiceDate, String totalPayment, Boolean status) {
        this.idOrders = idOrders;
        this.invoiceDate = invoiceDate;
        this.totalPayment = totalPayment;
        this.status = status;
    }

    public Integer getIdOrders() {
        return idOrders;
    }

    public void setIdOrders(Integer idOrders) {
        this.idOrders = idOrders;
    }

    public String getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(String invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public String getTotalPayment() {
        return totalPayment;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public void setTotalPayment(String totalPayment) {
        this.totalPayment = totalPayment;
    }
}