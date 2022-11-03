import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtRequest } from '../jwt-request';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  jwtRequest:JwtRequest=new JwtRequest();

  user:User=new User();

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin()
  {
    this.service.authenticate(this.jwtRequest).subscribe(data=>{
      console.log(data.token);
      sessionStorage.setItem('token',data.token);
      sessionStorage.setItem('name',this.jwtRequest.username);
      this.authorize();
    },error=>{alert("error")})
  }

  authorize(){
    this.service.getUserByName().subscribe(data=>{
      sessionStorage.setItem('role',data.roles);
      if(data.roles=='ROLE_admin')
      {
        this.router.navigate(['admin'])
      }else
      {
        this.router.navigate(['user'])
      }
    })
  }

}
