import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  

  constructor(private router:Router){
    
  }

  canActivate(){
    if(sessionStorage.getItem('role')=='ROLE_admin')
    {
      return true;
    }else
    {
      alert("Not AUth")
      this.router.navigate(['user'])
      return false;
    }
    
  }
  
}
