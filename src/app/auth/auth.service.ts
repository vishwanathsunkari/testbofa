import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

constructor(private router: Router) {}

  registeredUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    console.log(this.user);
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }


  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    console.log(this.user);
    this.authChange.next(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user != null;
  }
}
