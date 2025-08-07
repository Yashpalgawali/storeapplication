import { Injectable } from '@angular/core'; 
import { JwtAuthServiceService } from './jwt-auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor( private jwtauth: JwtAuthServiceService ) { }

  public login(username:string , pass : string)
  {
    return this.jwtauth.executeJwtAuthenticationService(username,pass);
  } 
}
