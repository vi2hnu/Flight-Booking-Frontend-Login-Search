import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = () => {
  const router = new Router();

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
