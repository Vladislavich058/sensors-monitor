package com.sensors.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.sensors.dtos.ErrorMessageDTO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class ExceptionApiHandler {

	@ExceptionHandler(SensorAlreadyExistsException.class)
	public ResponseEntity<ErrorMessageDTO> sensorAlreadyExistsException(SensorAlreadyExistsException exception) {
		log.error(exception.getMessage());
		return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorMessageDTO(exception.getMessage()));
	}
	
	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<ErrorMessageDTO> notFoundException(NotFoundException exception) {
		log.error(exception.getMessage());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorMessageDTO(exception.getMessage()));
	}
}
