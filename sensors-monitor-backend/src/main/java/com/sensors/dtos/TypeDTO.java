package com.sensors.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class TypeDTO {
	
	private Long id;

	@NotBlank
	private String name;
}
