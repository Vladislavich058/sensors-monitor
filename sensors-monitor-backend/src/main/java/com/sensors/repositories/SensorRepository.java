package com.sensors.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sensors.entities.Sensor;

public interface SensorRepository extends JpaRepository<Sensor, Long> {
	Optional<Sensor> findByNameAndModel(String name, String model);

	Optional<Sensor> findByNameAndModelAndIdNot(String name, String model, Long id);
}
