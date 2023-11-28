package com.sensors.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sensors.entities.Sensor;
import com.sensors.exceptions.NotFoundException;
import com.sensors.repositories.SensorRepository;

@Service
public class SensorServiceImpl implements SensorService {

	@Autowired
	SensorRepository sensorRepository;

	@Override
	public Iterable<Sensor> getSensors() {
		return sensorRepository.findAll(Sort.by("id"));
	}

	@Override
	public Sensor getSensorById(Long id) throws NotFoundException {
		Sensor findSensor = sensorRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Sensor with id " + id + " not found!"));
		return findSensor;
	}

}
