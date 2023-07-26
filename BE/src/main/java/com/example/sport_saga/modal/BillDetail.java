package com.example.sport_saga.modal;

import javax.persistence.*;

@Entity
@Table(name = "bill_detail")
public class BillDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_bill_detail")
    private Integer idBillDetail;
    @Column(name = "quantity_product")
    private int quantityOfProduct;

    @Column(name = "price_of_product", columnDefinition = "DOUBLE")
    private Double priceOfProduct;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_bill")
    private Bill bill;

    @ManyToOne
    @JoinColumn(name = "id_product", referencedColumnName = "id_product", nullable = false)
    private Product product;
}

