package com.example.sport_saga.modal;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "bill")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_bill")
    private Integer idBill;

    @Column(name = "code_bill", columnDefinition = "Varchar(40)")
    private String codeBill;

    @Column(name = "day_of_bill", columnDefinition = "date")
    private LocalDate dayOfBill;

    @Column(name = "payment_status")
    private Integer paymentStatus;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;


    @OneToMany(mappedBy = "bill", cascade = CascadeType.ALL)
    private List<BillDetail> billDetails;

    public Bill() {
    }

    public Bill(Integer idBill, String codeBill, LocalDate dayOfBill, Integer paymentStatus, Customer customer, List<BillDetail> billDetails) {
        this.idBill = idBill;
        this.codeBill = codeBill;
        this.dayOfBill = dayOfBill;
        this.paymentStatus = paymentStatus;
        this.customer = customer;
        this.billDetails = billDetails;
    }

    public Integer getIdBill() {
        return idBill;
    }

    public void setIdBill(Integer idBill) {
        this.idBill = idBill;
    }

    public String getCodeBill() {
        return codeBill;
    }

    public void setCodeBill(String codeBill) {
        this.codeBill = codeBill;
    }

    public LocalDate getDayOfBill() {
        return dayOfBill;
    }

    public void setDayOfBill(LocalDate dayOfBill) {
        this.dayOfBill = dayOfBill;
    }

    public Integer getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(Integer paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<BillDetail> getBillDetails() {
        return billDetails;
    }

    public void setBillDetails(List<BillDetail> billDetails) {
        this.billDetails = billDetails;
    }
}

