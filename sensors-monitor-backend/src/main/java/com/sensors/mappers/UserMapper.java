package com.sensors.mappers;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;

import com.sensors.dtos.UserDTO;
import com.sensors.entities.User;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.FIELD)
public interface UserMapper {
	User toUser(UserDTO userDTO);
}
