import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = { email: '', password: '' };
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        if (response) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          this.redirectToDashboard(response.role);
        } else {
          this.loginError = true;
        }
      },
      (error) => {
        this.loginError = true;
        console.error('Error de inicio de sesión', error);
      }
    );
  }

  private redirectToDashboard(role: string) {
    switch (role) {
      case 'admin':
        this.router.navigate(['/administrador/dashboard']);
        break;
      case 'advisor':
        this.router.navigate(['/asesor/dashboard']);
        break;
      case 'dictaminador':
        this.router.navigate(['/dictaminador/dashboard']);
        break;
      case 'student':
        this.router.navigate(['/estudiante/dashboard']);
        break;
      default:
        this.router.navigate(['/user/login']);
    }
  }
}
