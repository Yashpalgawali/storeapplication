import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtAuthServiceService } from './jwt-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpJwtInterceptorService implements HttpInterceptor{

  constructor(private jwtauth : JwtAuthServiceService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let rawToken = this.jwtauth.getAuthenticatedToken()
    if(rawToken!=null)
    {
      let jwttoken = 'Bearer '+this.jwtauth.getAuthenticatedToken()
      request = request.clone({
        setHeaders : {
            Authorization : `${jwttoken}`
          },
          withCredentials: true // Ensure credentials (cookies) are sent  

        })
      }
      return next.handle(request);
  }
}
