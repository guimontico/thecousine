import { CanActivateFn, Router } from '@angular/router';
import { LoginModel } from '../models/login.model';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);
  const loginInfo = JSON.parse(
    localStorage.getItem('loginInfo') as string
  ) as LoginModel;
  if (loginInfo.isLoggedIn === true) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};
