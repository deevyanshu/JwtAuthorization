import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
    
  }

  logout()
  {
    this.service.logout();
    this.router.navigate(['login']);
  }

}
