import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { AuthenticationBean } from '../Models/AuthenticationBean';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthServiceService {

  constructor(private http: HttpClient) { }
  app_url = GlobalComponents.base_url;
  base_url= this.app_url;
  
  executeAuthenticationService(username:any, password:any) {
  
    let basicAuthHeaderString = 'Basic ' + btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: `${basicAuthHeaderString}`
      })
     
     sessionStorage.setItem('token',basicAuthHeaderString)
     return this.http.get<AuthenticationBean>(`${this.base_url}basicauth`,{ headers : headers }).pipe(
                    map(
                      data=>{
                              sessionStorage.setItem('token',basicAuthHeaderString);
                              sessionStorage.setItem('authenticatedUser',username);
                              
                              return data;
                        }
                    ));
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
    else
      return null
  }

  isUserLoggedIn() {
   
    let user = sessionStorage.getItem('token')
        return !(user === null)
  }

  logout() {
    
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }
}
