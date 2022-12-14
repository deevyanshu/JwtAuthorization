import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private service:AuthService,private router:Router){}

  canActivate(){
    if(this.service.isUserLoggedIn())
    {
      return true;
    }else
    {
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
