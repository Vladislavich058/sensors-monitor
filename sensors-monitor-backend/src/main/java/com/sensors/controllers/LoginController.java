package com.sensors.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sensors.dtos.AuthDTO;
import com.sensors.dtos.UserDTO;
import com.sensors.services.LoginService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
public class LoginController {
	@Autowired
	LoginService loginService;

	@PostMapping("/login")
	public AuthDTO logIn(@Valid @RequestBody UserDTO userDTO) {

		return loginService.logIn(userDTO);
	}
}
