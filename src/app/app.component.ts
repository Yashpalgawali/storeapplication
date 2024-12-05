import { Component, OnInit } from '@angular/core';
import { JwtAuthServiceService } from './Services/jwt-auth-service.service';
import { filter, timeInterval } from 'rxjs';
import { ViewinvoicetemplateComponent } from './MyComponents/Invoice/viewinvoicetemplate/viewinvoicetemplate.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'storeapp';
  isLoggedIn : any
  showFooter !: boolean
  constructor(private jwtauthserv : JwtAuthServiceService,private router : Router) { 
   
    setInterval(() => {
      this.isLoggedIn = jwtauthserv.getAuthenticatedUser()
      }, 1);

  }

  ngOnInit(): void {
       // Listen for route changes to toggle footer visibility
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      // Check if the current route is '/login' to hide the footer
      const currentRoute = this.router.url;
      this.showFooter = currentRoute !== '/login';
    });
  }
}
