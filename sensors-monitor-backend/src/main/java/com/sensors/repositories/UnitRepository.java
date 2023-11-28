package com.sensors.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sensors.entities.Unit;

public interface UnitRepository extends JpaRepository<Unit, Long> {

}
