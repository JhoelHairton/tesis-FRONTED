import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Nota: Asegúrate de que el nombre sea 'styleUrls' (con 's')
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

          // Redirige al dashboard según el rol del usuario
          this.redirectToDashboard(response.role);
        } else {
          this.loginError = true;
        }
      },
      (error) => {
        this.loginError = true;
        console.error('Error de inicio de sesión:', error);
      }
    );
  }

  private redirectToDashboard(role: string) {
    switch (role) {
      case 'ADMINISTRADOR':
        this.router.navigate(['/administrador/dashboard']);
        break;
      case 'ASESOR':
        this.router.navigate(['/asesor/dashboard']);
        break;
      case 'EVALUADOR':
        this.router.navigate(['/evaluador/dashboard']);
        break;
      case 'ESTUDIANTE':
        this.router.navigate(['/estudiante/dashboard']);
        break;
      default:
        this.router.navigate(['/user/login']);
    }
  }
}