import { Component } from '@angular/core';
import { JwtAuthServiceService } from './Services/jwt-auth-service.service';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeapp';
  isLoggedIn : any
  constructor(private jwtauthserv : JwtAuthServiceService) { 
   
    setInterval(() => {
      this.isLoggedIn = jwtauthserv.getAuthenticatedUser()
      }, 1);
      
  
  }
}
