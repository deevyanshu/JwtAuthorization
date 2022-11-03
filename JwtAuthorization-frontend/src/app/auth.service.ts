import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRequest } from './jwt-request';
import { JwtResponse } from './jwt-response';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl="http://localhost:9000/api/v1/jwt";

  constructor(private http:HttpClient) { }

  authenticate(jwtrequest:JwtRequest):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.baseurl}/auth`,jwtrequest);
  }

  isUserLoggedIn()
  {
    if(sessionStorage.getItem('token')==null)
    {
      return false;
    }else
    {
      return true;
    }
  }

  getUserName()
  {
    return sessionStorage.getItem('name');
  }

  logout()
  {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
  }

  getUserByName():Observable<User>{
    const name=this.getUserName();
    return this.http.get<User>(`${this.baseurl}/${name}`);
  }

  
}
