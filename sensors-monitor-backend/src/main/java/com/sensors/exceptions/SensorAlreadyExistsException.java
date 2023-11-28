package com.sensors.exceptions;

public class SensorAlreadyExistsException extends Exception {

	private static final long serialVersionUID = -1041705195726031336L;

	public SensorAlreadyExistsException(String mes) {
		super(mes);
	}
}
