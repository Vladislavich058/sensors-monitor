package com.sensors.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class SensorDTO {
	
	private Long id;
	
	@NotBlank
	@Length(max = 30)
	private String name;

	@NotBlank
	@Length(max = 15)
	private String model;

	@NotNull
	private Integer startRange;

	@NotNull
	private Integer endRange;

	@NotNull
	private TypeDTO type;

	@NotNull
	private UnitDTO unit;

	@NotBlank
	@Length(max = 40)
	private String location;

	@NotBlank
	@Length(max = 200)
	private String description;
}
