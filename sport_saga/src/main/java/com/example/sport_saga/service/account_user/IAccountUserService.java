package com.example.sport_saga.service.account_user;


import com.example.sport_saga.dto.AccountUserDTO;
import com.example.sport_saga.modal.AccountUser;

public interface IAccountUserService {
    AccountUser findAccountUserByNameAccount(String name);
    Boolean existByNameAccount(String name);
    AccountUser saveAccountUser(AccountUser accountUser);
    AccountUser findAccountUserByEmail(String email);
    void updatePassword(AccountUserDTO accountUserDTO, Integer id);

    AccountUser findById(int id);
}
