package com.example.sport_saga.service.roles;

import com.example.sport_saga.modal.Roles;

public interface IRolesService {
    Roles findRolesByName (String name);
}
