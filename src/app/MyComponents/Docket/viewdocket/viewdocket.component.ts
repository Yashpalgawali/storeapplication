import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocketService } from 'src/app/Services/docket.service';

@Component({
  selector: 'app-viewdocket',
  templateUrl: './viewdocket.component.html',
  styleUrls: ['./viewdocket.component.css']
})
export class ViewdocketComponent implements OnInit {
  response : any
  reserr : any
  docklist : any

  constructor(private docketserv : DocketService,private router : Router) { }
  ngOnInit(): void {
      this.docketserv.getAllDockets().subscribe({
        next:(data) => {
            this.docklist = data
        }
      })

      if(sessionStorage.getItem('response')!=null) {
        this.response = sessionStorage.getItem('response')
        setTimeout(() => {
          this.response=""
          sessionStorage.removeItem('response')
        }, 3000);
      }

      if(sessionStorage.getItem('reserr')!=null) {
        this.reserr = sessionStorage.getItem('reserr')
        setTimeout(() => {
          this.reserr=""
          sessionStorage.removeItem('reserr')
        }, 3000);
      }
  }

  getDocketById(docket_id : number) {
    this.router.navigate(['edit/docket/',docket_id])
  }
}
