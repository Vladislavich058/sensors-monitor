package com.sensors.mappers;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;

import com.sensors.dtos.UnitDTO;
import com.sensors.entities.Unit;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.FIELD)
public interface UnitMapper {
	Unit toUnit(UnitDTO unitDTO);
}
