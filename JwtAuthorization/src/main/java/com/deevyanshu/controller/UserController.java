package com.deevyanshu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deevyanshu.entity.JwtRequest;
import com.deevyanshu.entity.JwtResponse;
import com.deevyanshu.entity.User;
import com.deevyanshu.service.UserService;
import com.deevyanshu.util.JwtUtil;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("api/v1/jwt")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@Autowired
	private JwtUtil util;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/create")
	public User create(@RequestBody User user)
	{
		return service.create(user);
	}
	
	@PostMapping("/auth")
	public JwtResponse auth(@RequestBody JwtRequest request)
	{
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
		String token=util.generateToken(request.getUsername());
		return new JwtResponse(token, "created");
	}
	
	@GetMapping("/welcome")
	@PreAuthorize("hasRole('admin')")
	public String afterLogin()
	{
		return "welcome";
	}
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username")String username)
	{
		return service.getUser(username);
	}

}
