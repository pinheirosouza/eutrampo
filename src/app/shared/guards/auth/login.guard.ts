import { CanActivate, Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    // this.router.navigate(['home']);
    return !this.auth.isAuthenticated();
  }
}