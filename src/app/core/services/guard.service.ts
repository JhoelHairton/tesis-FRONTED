import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const role = this.authService.getRole();

    if (this.authService.isAuthenticated() && role === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
