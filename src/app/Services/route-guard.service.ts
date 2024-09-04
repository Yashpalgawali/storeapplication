import { Injectable } from '@angular/core';
import { BasicAuthServiceService } from './basic-auth-service.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { JwtAuthServiceService } from './jwt-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private basicauthserv : BasicAuthServiceService,private router : Router,
              private jwtauthserv : JwtAuthServiceService) { }

  canActivate(route : ActivatedRouteSnapshot,state : RouterStateSnapshot) {

    //if(this.basicauthserv.isUserLoggedIn())
    if(this.jwtauthserv.isUserLoggedIn())
    {
      return true
    }
    else
    {
      sessionStorage.removeItem('authenticatedUser')
      sessionStorage.removeItem('token')
      localStorage.removeItem('authenticatedUser')
      localStorage.removeItem('token')
      this.router.navigate(['login']);
      return false;
   }
  }
}
