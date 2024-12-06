import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/Users';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

   user : Users = new Users()

  constructor(private router : Router,private userserv : UserService){ }
  
  ngOnInit(): void {
    this.user.username =  sessionStorage.getItem('authenticatedUser')!
     
  }

  changePassword() {
    this.userserv.updatePassword(this.user).subscribe({
      next:(data) =>{
          alert(JSON.stringify(data))
          this.router.navigate(['home'])
      },
      error:(err) =>{
          alert(JSON.stringify(err))
          this.router.navigate(['home'])
      },
    })
  }
}
