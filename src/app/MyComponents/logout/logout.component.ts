import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuthServiceService } from 'src/app/Services/jwt-auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  response : any
  constructor(private jwtauthserv : JwtAuthServiceService,private router : Router){ }

  ngOnInit(): void {
     
    this.jwtauthserv.logout()        
    
    sessionStorage.removeItem('temp_invoice_id')
    sessionStorage.removeItem('po_temp_id')
    this.response="Logged Out Successfully"
    sessionStorage.setItem('response',this.response)
    this.router.navigate(['login'])
  }
  
}
