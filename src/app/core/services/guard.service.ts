import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token'); // Verifica si hay un token
    const userRole = localStorage.getItem('role'); // Obtiene el rol del usuario
    const expectedRole = route.data['expectedRole']; // Obtiene el rol esperado de las rutas

    if (token && userRole === expectedRole) {
      return true; // Permite el acceso si los roles coinciden
    } else {
      this.router.navigate(['/user/login']); // Redirige al login si no coincide
      return false;
    }
  }
}
