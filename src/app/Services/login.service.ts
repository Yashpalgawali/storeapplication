import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { BasicAuthServiceService } from './basic-auth-service.service';
import { JwtAuthServiceService } from './jwt-auth-service.service';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient,
              private basicauthserv : BasicAuthServiceService,
              private jwtauth: JwtAuthServiceService) { }

  public login(username:string , pass : string)
  {
    return this.jwtauth.executeJwtAuthenticationService(username,pass);
  } 
}
