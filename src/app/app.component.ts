import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModel } from './models/login.model';
import { MealsService } from './service/meals.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [MealsService],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const loginInfo: LoginModel = {
      isLoggedIn: true,
      email: 'test@test.com',
      password: '1234',
    };
    localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
  }
}
