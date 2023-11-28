package com.sensors.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sensors.dtos.SensorDTO;
import com.sensors.entities.Sensor;
import com.sensors.entities.Type;
import com.sensors.entities.Unit;
import com.sensors.exceptions.NotFoundException;
import com.sensors.exceptions.SensorAlreadyExistsException;
import com.sensors.services.AdminService;
import com.sensors.services.SensorService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired
	SensorService sensorService;

	@Autowired
	AdminService adminService;

	@GetMapping("/sensors")
	public Iterable<Sensor> getSensors() {
		return sensorService.getSensors();
	}

	@GetMapping("/types")
	public Iterable<Type> getTypes() {
		return adminService.getTypes();
	}

	@GetMapping("/units")
	public Iterable<Unit> getUnits() {
		return adminService.getUnits();
	}

	@GetMapping("/sensor/{id}")
	public Sensor getSensorById(@PathVariable Long id) throws NotFoundException {
		return sensorService.getSensorById(id);
	}

	@DeleteMapping("/sensor/{id}")
	public Long deleteSensor(@PathVariable Long id) throws NotFoundException {
		return adminService.deleteSensor(id);
	}

	@PostMapping("/sensor")
	public Sensor addSensor(@Valid @RequestBody SensorDTO sensorDTO) throws SensorAlreadyExistsException {
		return adminService.addSensor(sensorDTO);
	}

	@PatchMapping("/sensor")
	public Sensor editSensor(@Valid @RequestBody SensorDTO sensorDTO) throws SensorAlreadyExistsException {
		return adminService.editSensor(sensorDTO);
	}
}
