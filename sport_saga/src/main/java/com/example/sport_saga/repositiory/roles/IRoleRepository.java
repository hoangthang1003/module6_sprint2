package com.example.sport_saga.repositiory.roles;

import com.example.sport_saga.modal.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Roles, Integer> {
    Roles findByNameRoles(String name);
}
