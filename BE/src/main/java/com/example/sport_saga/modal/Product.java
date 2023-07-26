package com.example.sport_saga.modal;


import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Integer idProduct;

    @Column(name = "name_product", columnDefinition = "Varchar(40)")
    private String nameProduct;

    @Column(name="gender",columnDefinition = "Boolean")
    private Boolean gender;

    @Column(name = "color", columnDefinition = "MEDIUMTEXT")
    private String color;
    @Column(name = "quantity")
    private Long quantity;
    @Column(name = "size", columnDefinition = "MEDIUMTEXT")
    private String size;
    @Column(name = "description", columnDefinition = "MEDIUMTEXT")
    private String description;

    @Column(name = "price", columnDefinition = "DOUBLE")
    private Double price;
    @Column(name = "local", columnDefinition = "MEDIUMTEXT")
    private String local;

    @Column(name = "image", columnDefinition = "MEDIUMTEXT")
    private String image;

    @ManyToOne
    @JoinColumn(name = "id_type", referencedColumnName = "id_type")
    private ProductType productType;

    public Product() {
    }

    public Product(Integer idProduct, String nameProduct, Boolean gender, String color, Long quantity, String size, String description, Double price, String local, String image, ProductType productType) {
        this.idProduct = idProduct;
        this.nameProduct = nameProduct;
        this.gender = gender;
        this.color = color;
        this.quantity = quantity;
        this.size = size;
        this.description = description;
        this.price = price;
        this.local = local;
        this.image = image;
        this.productType = productType;
    }

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public Boolean getGender() {
        return gender;
    }

    public void setGender(Boolean gender) {
        this.gender = gender;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
