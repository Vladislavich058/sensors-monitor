package com.sensors.mappers;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;

import com.sensors.dtos.SensorDTO;
import com.sensors.entities.Sensor;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.FIELD, uses = { TypeMapper.class,
		UnitMapper.class })
public interface SensorMapper {
	Sensor toSensor(SensorDTO sensorDTO);
}
