import { AuthService } from "./../../../shared/services/auth/auth.service";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    // this.router.navigate(['home']);
    return this.auth.isAuthenticated();
  }
}