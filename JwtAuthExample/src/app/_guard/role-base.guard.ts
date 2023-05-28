import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class RoleBaseGuard {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Stage 1: check user authentication
      if (!this.authService.isAuthenticated) {
        this.router.navigate(['/auth/login']);
        this.authService.logout();
        return false;
      }
      const validRoles = route.data['authorities'] || [];
      const userData = this.authService.userData;
      
      // Stage 2: Check user role
      if (!validRoles.includes(userData.userInfo.role)) {

        this.router.navigate(['/']); 
        return false;
      }
      return true;
  }
}