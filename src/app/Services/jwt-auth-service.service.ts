import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { JwtToken } from '../Models/JwtToken';

@Injectable({
  providedIn: 'root'
})

export class JwtAuthServiceService {
  constructor(private http: HttpClient) { }
  app_url = GlobalComponents.base_url;
  
  executeJwtAuthenticationService(username:any, password:any):Observable<JwtToken> {
    let basicAuthHeaderString = 'Basic ' + btoa(username + ':' + password);
    
    let headers = new HttpHeaders({
        Authorization: `${basicAuthHeaderString}`
    })
     
    // return this.http.get<JwtToken>(`${this.app_url}authenticate`,{ headers : headers}).pipe(
      return this.http.get<JwtToken>(`${this.app_url}authenticate`, { headers: headers, withCredentials: true }  ).pipe(
    map(
                      data=>{ 
                              sessionStorage.setItem('token',data.token)
                              sessionStorage.setItem('authenticatedUser',username)
                              localStorage.setItem('authenticatedUser',username)
                              localStorage.setItem('token',data.token)
                              return data;
                        }
                    ));
 
  }

  getAuthenticatedUser() {
    
    if(sessionStorage.getItem('authenticatedUser')!=null || sessionStorage.getItem('authenticatedUser')!='')
    {
      return sessionStorage.getItem('authenticatedUser')
    }
    else
    {
      sessionStorage.setItem('token',`${localStorage.getItem('token')}`)
      sessionStorage.setItem('authenticatedUser',`${localStorage.getItem('authenticatedUser')}`)
      return localStorage.getItem('authenticatedUser') 
    }
  }
  
  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()!=null)
    {
      return sessionStorage.getItem('token') 
    }

    else
      return
  }

  isUserLoggedIn() {
    if(sessionStorage.getItem('authenticatedUser')!=null || sessionStorage.getItem('authenticatedUser')!='')
    {
      let user = sessionStorage.getItem('token')
      return !(user === null)
    }
    else {
      let user = localStorage.getItem('token')
      return !(user === null)
    }
  }

  logout() {
    
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
    localStorage.removeItem('authenticatedUser')
    localStorage.removeItem('token')
    
  }
}
