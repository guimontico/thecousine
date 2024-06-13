import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModel } from './models/login.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const loginInfo: LoginModel = {
      isLoggedIn: false,
      email: 'test@test.com',
      password: '1234',
    };
    localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
  }
}
