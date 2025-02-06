import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../models/login.interface';
import { AlerService } from '../../services/swal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel: Login = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlerService) { }

  onSubmit() {
    this.authService.login(this.loginModel).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (error) => {
        if (error.status === 401) {
          this.alertService.showError("Invalid email or password.", "Error login");
        } else {
          this.alertService.showError(error.message, "Error login");
        }
      }
    });
  }

}
