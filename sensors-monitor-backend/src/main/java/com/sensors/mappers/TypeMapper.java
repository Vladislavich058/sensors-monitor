package com.sensors.mappers;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;

import com.sensors.dtos.TypeDTO;
import com.sensors.entities.Type;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.FIELD)
public interface TypeMapper {
	Type toType(TypeDTO typeDTO);
}
