import { Injectable } from '@angular/core';
import { BasicAuthServiceService } from './basic-auth-service.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  
  constructor(private basicauthserv : BasicAuthServiceService,private router : Router) { }

  canActivate(route : ActivatedRouteSnapshot,state : RouterStateSnapshot) {
    if(this.basicauthserv.isUserLoggedIn())
    {
      alert('if part')
      return true
    }
  else{
    alert('else part')
    this.router.navigate(['login']);
    return false;
   }
  }
}
