import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
