import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/Services/login.service';

@Component({
  selector: 'micro-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  navigateHome(){
    this.router.navigate(['/home']);
  }

  logout() {
    this.loginService.logout();
  }

}
