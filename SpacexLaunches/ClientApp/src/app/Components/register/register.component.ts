import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Register } from '../../models/register.interface';
import { AlerService } from '../../services/swal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerModel: Register = {
    name: '',
    lastName: '',
    email: '',
    password: ''
  };


  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlerService) { }


  onSubmit() {
    this.authService.register(this.registerModel).subscribe({
      next: () => {
        this.alertService.showSuccess("User created successfully", "Register success");
        this.router.navigate(['/login']);
      },
      error: (error) => {
        if (error.status === 400) {
          this.alertService.showError("User already exists. Please choose a different email.", "Error register");
        } else {
          this.alertService.showError(error.message, "Error register");
        }
      }
    });
  }
}
