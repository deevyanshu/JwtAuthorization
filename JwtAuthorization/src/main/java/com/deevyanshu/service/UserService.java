package com.deevyanshu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.deevyanshu.entity.User;
import com.deevyanshu.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private BCryptPasswordEncoder encoder; 
	
	public User create(User user)
	{
		user.setPassword(encoder.encode(user.getPassword()));
		return repository.save(user);
	}
	
	public User getUser(String username)
	{
		return repository.findUserByName(username);
	}
	
	

}
