import { User } from '../Store/Model/User.model';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../service/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService)
  const router = inject(Router)
   
  const user: User = service.getUserFromStorage();
  if (user.accessToken != '' && user.accessToken != null) {
    return true;
  } else {
    router.navigateByUrl('/');
    return false;
  }
};
