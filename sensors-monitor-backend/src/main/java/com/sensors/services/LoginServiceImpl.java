package com.sensors.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sensors.dtos.AuthDTO;
import com.sensors.dtos.UserDTO;
import com.sensors.entities.User;
import com.sensors.mappers.UserMapper;
import com.sensors.repositories.UserRepository;
import com.sensors.security.jwt.JwtUtils;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	UserMapper userMapper;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@Override
	public AuthDTO logIn(UserDTO userDTO) {
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(userDTO.getUsername(), userDTO.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		User userDetails = (User) authentication.getPrincipal();
		String role = userDetails.getAuthorities().stream().map(item -> item.getAuthority()).findFirst().get();
		return new AuthDTO(jwt, "Bearer", userDetails.getId(), userDetails.getUsername(), role);
	}
}
