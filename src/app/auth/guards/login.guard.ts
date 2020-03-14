// import { AuthService } from 'src/app/auth/services/auth.service';
// import { Injectable } from '@angular/core';  
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';  

// @Injectable({ providedIn: 'root' })  

// export class LoginGuard implements CanActivate {  
//     constructor(
//         private router: Router,
//         private authService: AuthService
//         ) { }  
//     canActivate(next: ActivatedRouteSnapshot) {  

//         if(this.authService.isLogged()){
//             this.router.navigate[('login')];
//         }

//         return !this.authService.isLogged()
        
//     } 
    
//   }