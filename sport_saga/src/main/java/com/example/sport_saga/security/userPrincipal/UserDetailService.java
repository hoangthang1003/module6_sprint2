package com.example.sport_saga.security.userPrincipal;


import com.example.sport_saga.modal.AccountUser;
import com.example.sport_saga.service.account_user.IAccountUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * @Param username
 * @return UserDetails loadUserByUsername(String username)
 * Phương thức sử dụng để build đối tượng UserDetails dựa trên đối tượng AccountUser được lấy ra lên từ db
 * Kết quả trả về là đối tượng UserDetails.
 */
@Service
public class UserDetailService implements UserDetailsService {
    @Autowired
    private IAccountUserService accountUserService;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) {
        try {
            AccountUser accountUser = accountUserService.findAccountUserByNameAccount(username);
            return UserPrinciple.build(accountUser);
        } catch(UsernameNotFoundException e) {
            e.getMessage();
        }
        return null;
    }
}
