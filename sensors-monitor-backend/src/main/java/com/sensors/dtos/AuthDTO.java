package com.sensors.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AuthDTO {
	
	private String accessToken;

	private String type;

	private Long id;

	private String username;

	private String role;
}
