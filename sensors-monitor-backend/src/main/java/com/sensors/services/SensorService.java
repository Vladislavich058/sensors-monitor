package com.sensors.services;

import com.sensors.entities.Sensor;
import com.sensors.exceptions.NotFoundException;

public interface SensorService {
	Iterable<Sensor> getSensors();

	Sensor getSensorById(Long id) throws NotFoundException;
}
