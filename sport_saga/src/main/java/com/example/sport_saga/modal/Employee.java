package com.example.sport_saga.modal;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_employee")
    private Integer idEmployee;

    private boolean gender;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "salary", columnDefinition = "DOUBLE PRECISION")
    private Double salary;

    @Column(name = "image", columnDefinition = "MEDIUMTEXT")
    private String image;

    @Column(name = "name_employee", columnDefinition = "Varchar(40)")
    private String nameEmployee;

    @Column(name = "address", columnDefinition = "Varchar(40)")
    private String address;

    @Column(name = "phone_number",columnDefinition = "Varchar(15)",unique = true)
    private String phoneNumber;

    @Column(name = "email", columnDefinition = "Varchar(40)",unique = true)
    private String email;


    @ManyToOne
    @JoinColumn(name = "id_position", referencedColumnName = "id_position")
    private Position position;

    @OneToOne
    @JoinColumn(columnDefinition = "id_account")
    private AccountUser accountUser;



    public Employee() {
    }

    public Employee(Integer idEmployee, boolean gender, LocalDate dateOfBirth, Double salary, String image, String nameEmployee, String address, String phoneNumber, String email, Position position, AccountUser accountUser) {
        this.idEmployee = idEmployee;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.salary = salary;
        this.image = image;
        this.nameEmployee = nameEmployee;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.position = position;
        this.accountUser = accountUser;
    }


    public Integer getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(Integer idEmployee) {
        this.idEmployee = idEmployee;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public AccountUser getAccountUser() {
        return accountUser;
    }

    public void setAccountUser(AccountUser accountUser) {
        this.accountUser = accountUser;
    }

}
