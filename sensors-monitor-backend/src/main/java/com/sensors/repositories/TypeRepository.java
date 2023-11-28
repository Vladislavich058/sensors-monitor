package com.sensors.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sensors.entities.Type;

public interface TypeRepository extends JpaRepository<Type, Long> {

}
