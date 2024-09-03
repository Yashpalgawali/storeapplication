import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Party } from 'src/app/Models/Party';
import { PartyService } from 'src/app/Services/party.service';

@Component({
  selector: 'app-addparty',
  templateUrl: './addparty.component.html',
  styleUrls: ['./addparty.component.css']
})
export class AddpartyComponent implements OnInit{

  response : any
  reserr : any
  party : Party = new Party()
  party_id !: number

  constructor(private router : Router,private partyserv : PartyService,private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.party_id = this.route.snapshot.params['id']
    if(this.party_id>0)
    {
        this.partyserv.getPartyById(this.party_id).subscribe({
        next : (data) => {
          this.party =  data
        }
      })
    } 
  }

  saveParty(){
    if(this.party.party_id>0)   {
      this.partyserv.updateParty(this.party).subscribe({
        next:(value) =>{
          sessionStorage.setItem('response','Party '+this.party.party_name+' is update successfully')
          this.router.navigate(['viewparties'])
        },
        error:(err) =>{
          sessionStorage.setItem('reserr','Party '+this.party.party_name+' is not updated')
          this.router.navigate(['viewparties'])
        }
      })
    }
    else {
      this.partyserv.saveParty(this.party).subscribe({
        next : (data) => {
            sessionStorage.setItem('response','Party '+this.party.party_name+' is saved successfully')
            this.router.navigate(['viewparties'])
        },
        error:(err) =>{
          sessionStorage.setItem('reserr','Party '+this.party.party_name+' is not saved')
          this.router.navigate(['viewparties'])
        }
      })
    
    }
  }
}
