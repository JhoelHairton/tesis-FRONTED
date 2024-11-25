import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8098/api/v1/auth/login'; // URL del backend

  constructor(private http: HttpClient, private router: Router) {}

  // Método para autenticar al usuario
  login(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, credentials, { headers });
  }
  
  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/user/login']); // Redirige al login
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Método para obtener el rol del usuario autenticado
  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
