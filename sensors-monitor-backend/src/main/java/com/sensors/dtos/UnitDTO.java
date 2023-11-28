package com.sensors.dtos;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class UnitDTO {

	private Long id;

	@NotBlank
	private String name;
}
