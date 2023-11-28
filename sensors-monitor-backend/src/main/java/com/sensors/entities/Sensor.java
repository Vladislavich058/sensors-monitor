package com.sensors.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "sensors")
public class Sensor implements Serializable {
	
	private static final long serialVersionUID = 1495541098330127433L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, length = 30)
	private String name;
	
	@Column(nullable = false, length = 15)
	private String model;
	
	@Column(nullable = false)
	private Integer startRange;
	
	@Column(nullable = false)
	private Integer endRange;
	
	@ManyToOne
	@JoinColumn(name = "type_id", nullable = false)
	private Type type;
	
	@ManyToOne
	@JoinColumn(name = "unit_id", nullable = false)
	private Unit unit;
	
	@Column(nullable = false, length = 40)
	private String location;
	
	@Column(nullable = false, length = 200)
	private String description;
	
}
