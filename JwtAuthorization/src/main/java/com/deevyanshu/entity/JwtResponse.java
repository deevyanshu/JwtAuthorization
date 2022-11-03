package com.deevyanshu.entity;

public class JwtResponse {
	
	public String token;
	
	public String message;
	
	public JwtResponse() {
		// TODO Auto-generated constructor stub
	}

	public JwtResponse(String token, String message) {
		super();
		this.token = token;
		this.message = message;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	
}
