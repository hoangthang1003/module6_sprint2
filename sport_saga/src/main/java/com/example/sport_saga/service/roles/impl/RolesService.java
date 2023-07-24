package com.example.sport_saga.service.roles.impl;

import com.example.sport_saga.modal.Roles;
import com.example.sport_saga.repositiory.roles.IRoleRepository;
import com.example.sport_saga.service.roles.IRolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolesService implements IRolesService {

    @Autowired
    private IRoleRepository iRoleRepository;

    @Override
    public Roles findRolesByName(String name) {
        return iRoleRepository.findByNameRoles(name);
    }
}
