package com.sensors.services;

import com.sensors.dtos.SensorDTO;
import com.sensors.entities.Sensor;
import com.sensors.entities.Type;
import com.sensors.entities.Unit;
import com.sensors.exceptions.NotFoundException;
import com.sensors.exceptions.SensorAlreadyExistsException;

public interface AdminService {
	Sensor addSensor(SensorDTO sensorDTO) throws SensorAlreadyExistsException;

	Sensor editSensor(SensorDTO sensorDTO) throws SensorAlreadyExistsException;

	Long deleteSensor(Long id) throws NotFoundException;
	
	Iterable<Unit> getUnits();
	
	Iterable<Type> getTypes();
}
