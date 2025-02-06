import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../../models/register.interface';
import { Login } from '../../models/login.interface';
import { Observable, catchError, map, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(false);
  private authChecked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient)
  {
    this.checkAuthStatus();
  }

  register(registerModel: Register) {
    return this.http.post('/api/auth/register', registerModel);
  }

  login(loginModel: Login): Observable<any> {
    return this.http.post<{ token: string }>('/api/auth/login', loginModel).pipe(
      map(response => {
        this.authStatus.next(true);
        return response;
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post('/api/auth/logout', {}).pipe(
      map(() => {
        this.authStatus.next(false);
        window.location.reload();
      })
    );
  }

  private checkAuthStatus(): void {
    this.http.get<{ isAuthenticated: boolean }>('/api/auth/auth-check').pipe(
      map(response => response.isAuthenticated),
      catchError(() => [false])
    ).subscribe(isAuthenticated => {
      this.authStatus.next(isAuthenticated);
      this.authChecked.next(true);
    });
  }

  isAuthenticated(): Observable<boolean> {
      return of(this.authStatus.value);
  }

  isAuthChecked(): Observable<boolean> {
    return this.authChecked.asObservable();
  }
}
