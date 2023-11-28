package com.sensors.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sensors.entities.Sensor;
import com.sensors.services.SensorService;

@RestController
@RequestMapping("/api/viewer")
public class ViewerController {

	@Autowired
	SensorService sensorService;

	@GetMapping("/sensors")
	public Iterable<Sensor> getSensors() {
		return sensorService.getSensors();
	}
}
