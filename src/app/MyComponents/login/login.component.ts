import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { JwtAuthServiceService } from 'src/app/Services/jwt-auth-service.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  response  : any;
  reserr    : any;
  login     : Login = new Login()
  constructor(private jwtauthserv  : JwtAuthServiceService,
              private loginserv : LoginService,
              private router    : Router) {  }

    ngOnInit(): void {

      this.response= sessionStorage.getItem('response')
      if(sessionStorage.getItem('response')!=null)
        {
          setTimeout(() => {
            sessionStorage.removeItem('response')
            this.response=""
          }, 3000);
        }
    }

Login() {
 this.loginserv.login(this.login.username,this.login.password).subscribe({
    next : (data)=> {
        this.router.navigate(['home'])
    },
    error :(e)=> {
      this.reserr="Invalid Username or Password"
      setTimeout(() => {
        alert(this.reserr)
        this.reserr=""
      }, 4000);
      this.router.navigate(['login'])
    }
 })
}

}
 