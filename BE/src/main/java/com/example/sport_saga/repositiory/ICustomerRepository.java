package com.example.sport_saga.repositiory;

import com.example.sport_saga.modal.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    Customer findCustomerByAccountUser_NameAccount(String name);

    @Query(value = "select * from customer",nativeQuery = true)
    Page<Customer> showListCustomer(Pageable pageable);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO customer ( address,date_of_birth, email, gender, id_card, img_customer, name, phone_number,account_user_id) "
            + "VALUES (:address, :date_of_birth, :email, :gender,:id_card, :img_customer, :name,:phone_number,:account_user_id)",
            nativeQuery = true)
    void saveCustomer(
            @Param("address") String address,
            @Param("date_of_birth") LocalDate dateOfBirth,
            @Param("email") String email,
            @Param("gender") Boolean gender,
            @Param("id_card") String idCard,
            @Param("img_customer") String image,
            @Param("name") String name,
            @Param("phone_number") String phoneNumber,
            @Param("account_user_id") Integer idAccount);

}
