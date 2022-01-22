import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'micro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  //@ts-ignore
  loginForm: FormGroup;

  constructor(private loginService: LoginService,
    private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      password: [''],
      username: [''],
    });
  }

  login(){
    this.loginService.login();
  }

}
