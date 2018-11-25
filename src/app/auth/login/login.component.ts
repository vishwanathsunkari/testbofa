import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthData } from '../auth-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authData: AuthData;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.authData = {
      email: form.value.email,
      password: form.value.password
    };
    this.authService.login(this.authData);
    form.resetForm();
    }

}
