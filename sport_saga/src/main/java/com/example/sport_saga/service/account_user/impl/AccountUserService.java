package com.example.sport_saga.service.account_user.impl;



import com.example.sport_saga.dto.AccountUserDTO;
import com.example.sport_saga.modal.AccountUser;
import com.example.sport_saga.repositiory.account.IAccountUserRepository;
import com.example.sport_saga.service.account_user.IAccountUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author ChinhLV
 * @Param name
 * @return AccountUser findAccountUserByNameAccount(String name)
 * Phương thức sử dụng để tìm kiếm account dựa vào tên account được truyền vào
 * Kết quả trả về là đối tượng AccountUser nếu thành công
 * @Param name
 * @return Boolean existByNameAccount(String name)
 * Phương thức sử dụng check tồn tại của tên account hay không
 * Nếu tên account đã tồn tại trong db thì trả về true, ngược lại false.
 * @Param AccountUser
 * @return AccountUser saveAccountUser(AccountUser accountUser)
 * Phương thức sử dụng để đối tượng của AccountUser về database
 */
@Service
public class AccountUserService implements IAccountUserService {
    @Autowired
    private IAccountUserRepository accountUserRepository;
//    @Autowired
//    private JavaMailSender javaMailSender;

    @Override
    public AccountUser findAccountUserByNameAccount(String name) {
        AccountUser accountUser = accountUserRepository.findAccountUserByNameAccount(name);
        return accountUser;
    }

    @Override
    public Boolean existByNameAccount(String name) {
        AccountUser accountUser = accountUserRepository.findAccountUserByNameAccount(name);
        if (accountUser != null) {
            return true;
        }
        return false;
    }

    @Override
    public AccountUser saveAccountUser(AccountUser accountUser) {
        return accountUserRepository.save(accountUser);
    }

    @Override
    public AccountUser findAccountUserByEmail(String email) {
        return accountUserRepository.findAccountUserByEmail(email);
    }

    @Override
    public void updatePassword(AccountUserDTO accountUserDTO, Integer id) {
        AccountUser accountUser = accountUserRepository.findAccountUserById(id);
        BeanUtils.copyProperties(accountUserDTO, accountUser);
        accountUserRepository.savePassword(
                accountUserDTO.getPasswordAccount(),
                accountUserDTO.getId()
        );
    }
    @Override
    public AccountUser findById(int id) {
        return accountUserRepository.findAccountUserById(id);
    }

}
