import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { TokenService } from '../_services/token/token.service';

export const roleGuard: CanActivateFn = (route, state) => {
   let authService = inject(AuthService)
   let tokenService = inject(TokenService)
   let router = inject(Router)
   
   let role: string | null= tokenService.getRoleToken(authService.getToken())

    if (role!= null && role === "admin") {

      return true
    } if (role!= null && role === "user"){
      router.navigate(['/profile']);
      return false;
    
    } else {
      router.navigate(['/login']);
      return false;
    }
};
