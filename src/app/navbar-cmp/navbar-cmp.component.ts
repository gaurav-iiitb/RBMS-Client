import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-navbar-cmp',
  templateUrl: './navbar-cmp.component.html',
  styleUrls: ['./navbar-cmp.component.css']
})
export class NavbarCmpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.navigate(['login-portal']);
  }

  clickLogout(event: any) {
  
    this.router.navigate(['login-portal']);
  }

}
