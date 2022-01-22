import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginSubject = new BehaviorSubject<boolean>(false);
  loginObservable = this.loginSubject.asObservable();

  login(){
    this.loginSubject.next(true);
  }

  logout(){
    this.loginSubject.next(false);
  }
}
