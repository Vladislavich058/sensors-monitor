package com.sensors.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UnitDTO {

	private Long id;

	@NotBlank
	private String name;
}
