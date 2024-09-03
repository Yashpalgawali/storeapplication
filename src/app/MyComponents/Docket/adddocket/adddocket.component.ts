import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Docket } from 'src/app/Models/Docket';
import { DocketService } from 'src/app/Services/docket.service';

@Component({
  selector: 'app-adddocket',
  templateUrl: './adddocket.component.html',
  styleUrls: ['./adddocket.component.css']
})
export class AdddocketComponent implements OnInit{

  docket : Docket = new Docket()
  docket_id !: number

  constructor(private router :Router,private docketserv : DocketService,private route : ActivatedRoute) { }
  ngOnInit(): void { 
    this.docket_id = this.route.snapshot.params['id']
    if(this.docket_id>0) {
      this.docketserv.getDocketById(this.docket_id).subscribe({
        next :(data) => {
            this.docket = data
        }
      })
    }

  }

  saveDocket() {
    if(this.docket.docket_id>0){
      this.docketserv.updateDocket(this.docket).subscribe({
        complete:()=> {
          sessionStorage.setItem('response','Docket is Updated successfully!!')
          this.router.navigate(['viewdockets'])
        },
        error :(err) =>{
            sessionStorage.setItem('reserr','Docket is not Updated')
            this.router.navigate(['viewdockets'])
        }
      })
    }
    else {
      this.docketserv.saveDocket(this.docket).subscribe({
        next : (data) => {
          sessionStorage.setItem('response','Docket is saved successfully!!')
          this.router.navigate(['viewdockets'])
        },
        error :(err) =>{
            sessionStorage.setItem('reserr','Docket is not Updated')
            this.router.navigate(['viewdockets'])
        }
      })
    }
  }
}
