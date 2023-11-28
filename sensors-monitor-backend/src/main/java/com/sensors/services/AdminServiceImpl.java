package com.sensors.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sensors.dtos.SensorDTO;
import com.sensors.entities.Sensor;
import com.sensors.entities.Type;
import com.sensors.entities.Unit;
import com.sensors.exceptions.NotFoundException;
import com.sensors.exceptions.SensorAlreadyExistsException;
import com.sensors.mappers.SensorMapper;
import com.sensors.repositories.SensorRepository;
import com.sensors.repositories.TypeRepository;
import com.sensors.repositories.UnitRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	SensorRepository sensorRepository;

	@Autowired
	SensorMapper sensorMapper;

	@Autowired
	UnitRepository unitRepository;

	@Autowired
	TypeRepository typeRepository;

	@Override
	public Sensor addSensor(SensorDTO sensorDTO) throws SensorAlreadyExistsException {
		if (sensorRepository.findByNameAndModel(sensorDTO.getName(), sensorDTO.getModel()).isPresent()) {
			throw new SensorAlreadyExistsException("Sensor with name: " + sensorDTO.getName() + " and model: "
					+ sensorDTO.getModel() + " already exists!");
		}
		return sensorRepository.save(sensorMapper.toSensor(sensorDTO));
	}

	@Override
	public Sensor editSensor(SensorDTO sensorDTO) throws SensorAlreadyExistsException {
		if (sensorRepository.findByNameAndModelAndIdNot(sensorDTO.getName(), sensorDTO.getModel(), sensorDTO.getId())
				.isPresent()) {
			throw new SensorAlreadyExistsException("Sensor with name: " + sensorDTO.getName() + " and model: "
					+ sensorDTO.getModel() + " already exists!");
		}
		return sensorRepository.save(sensorMapper.toSensor(sensorDTO));
	}

	@Override
	public Long deleteSensor(Long id) throws NotFoundException {
		if (sensorRepository.findById(id).isEmpty()) {
			throw new NotFoundException("Sensor with id " + id + " not found!");
		}
		sensorRepository.deleteById(id);
		return id;
	}

	@Override
	public Iterable<Unit> getUnits() {
		return unitRepository.findAll();
	}

	@Override
	public Iterable<Type> getTypes() {
		return typeRepository.findAll();
	}

}
