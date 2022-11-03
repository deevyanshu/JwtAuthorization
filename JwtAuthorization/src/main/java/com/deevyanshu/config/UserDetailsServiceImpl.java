package com.deevyanshu.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.deevyanshu.entity.User;
import com.deevyanshu.repository.UserRepository;

@Component
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private UserRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user=repository.findUserByName(username);
		if(user==null)
		{
			throw new UsernameNotFoundException("not found");
		}else
		{
			return new CustomUserDetails(user);
		}
	}

}
