import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Docket } from 'src/app/Models/Docket';
import { DocketService } from 'src/app/Services/docket.service';
import { PartyService } from 'src/app/Services/party.service';

@Component({
  selector: 'app-adddocket',
  templateUrl: './adddocket.component.html',
  styleUrls: ['./adddocket.component.css']
})
export class AdddocketComponent implements OnInit {

  docket : Docket = new Docket()
  docket_id !: number
  partylist : any
  constructor(private router :Router,private docketserv : DocketService,private route : ActivatedRoute,
              private partyserv : PartyService
  ) { }

  ngOnInit(): void { 
    this.docket_id = this.route.snapshot.params['id']
    if(this.docket_id>0) {
      this.docketserv.getDocketById(this.docket_id).subscribe({
        next :(data) => {
            this.docket = data
        }
      })
    }

    this.partyserv.getAllParties().subscribe({
      next: (data) => {
          this.partylist = data
      },
    })
  }

  saveDocket() {
    if(this.docket.docket_id>0){
      alert('Docket ID = '+this.docket.docket_id+' Docket data = '+JSON.stringify(this.docket))
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
      alert('inside saveDocket()')
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
