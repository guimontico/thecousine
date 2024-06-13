import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  readonly router = inject(Router);

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  ngOnInit() {}

  login() {
    const loginInput = {
      email: this.email.value,
      password: this.password.value,
      isLoggedIn: true,
    };
    const localLogin = JSON.parse(
      localStorage.getItem('loginInfo') as string
    ) as LoginModel;
    if (
      loginInput.email === localLogin.email &&
      loginInput.password?.toString() === localLogin.password
    ) {
      localStorage.setItem('loginInfo', JSON.stringify(loginInput));
      console.log('Login successful');
      this.router.navigate(['']);
    }
  }
}
