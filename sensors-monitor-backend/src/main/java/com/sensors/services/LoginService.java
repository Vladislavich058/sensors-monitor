package com.sensors.services;

import com.sensors.dtos.AuthDTO;
import com.sensors.dtos.UserDTO;

public interface LoginService {
	AuthDTO logIn(UserDTO userDTO);
}
