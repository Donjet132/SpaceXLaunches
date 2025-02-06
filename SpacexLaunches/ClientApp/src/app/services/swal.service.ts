import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlerService {
  constructor() { }

  showSuccess(message: string, title: string): void {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
    });
  }

  showError(message: string, title: string): void {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
    });
  }
}
