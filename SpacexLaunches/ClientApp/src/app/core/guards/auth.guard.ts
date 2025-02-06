import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return new Observable<boolean>(observer => {
    authService.isAuthChecked().pipe(
      filter(isChecked => isChecked), 
      take(1)
    ).subscribe(() => {
      authService.isAuthenticated().subscribe(isAuth => {
        if (isAuth) {
          observer.next(true);
          observer.complete();
        } else {
          router.navigate(['/login']);
          observer.next(false);
          observer.complete();
        }
      });
    });
  });
};


