import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.service.logout();
    this.router.navigate(['login']);
  }

}
