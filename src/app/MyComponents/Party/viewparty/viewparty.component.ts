import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyService } from 'src/app/Services/party.service';

@Component({
  selector: 'app-viewparty',
  templateUrl: './viewparty.component.html',
  styleUrls: ['./viewparty.component.css']
})
export class ViewpartyComponent implements OnInit{

  response : any
  reserr : any
  party_list : any
  
  constructor(private partyserv : PartyService,private router  : Router){ }
  
  ngOnInit(): void {
    this.partyserv.getAllParties().subscribe({
      next : (data) => {
          this.party_list = data
      },
    })
  }

  getPartyById(id : number) {
    this.router.navigate(['edit/party/',id])
  }
}
