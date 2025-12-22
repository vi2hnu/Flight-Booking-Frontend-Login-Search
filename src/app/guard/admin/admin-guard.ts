import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const user = JSON.parse(localStorage.getItem('user')!);
  const isadmin = user.roles.some((role: any) => role.name === 'ADMIN');
  if(isadmin){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
};
