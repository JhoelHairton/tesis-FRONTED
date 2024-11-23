import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  // Simulación de credenciales (puedes añadir más roles aquí)
  private users = [
    { email: 'admin@example.com', password: 'admin', role: 'admin' },
    { email: 'advisor@example.com', password: 'advisor', role: 'advisor' },
    { email: 'student@example.com', password: 'student', role: 'student' },
    { email: 'dictaminador@example.com', password: 'dictaminador', role: 'dictaminador' }

  ];

  login(credentials: { email: string; password: string }): Observable<any> {
    const user = this.users.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      // Guardar un "token" y el rol en localStorage para simular autenticación
      localStorage.setItem('token', 'fake-jwt-token'); // Un token simulado
      localStorage.setItem('role', user.role);
      return of({ token: 'fake-jwt-token', role: user.role });
    } else {
      return of(null); // Login fallido
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/user/login']); // Redirige al login después de cerrar sesión

  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
