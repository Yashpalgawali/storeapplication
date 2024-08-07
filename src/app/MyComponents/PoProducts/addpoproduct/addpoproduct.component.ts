import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoProductsList } from 'src/app/Models/PoProductsList';
import { PoproductService } from 'src/app/Services/poproduct.service';

@Component({
  selector: 'app-addpoproduct',
  templateUrl: './addpoproduct.component.html',
  styleUrls: ['./addpoproduct.component.css']
})
export class AddpoproductComponent implements OnInit {

  constructor(private router : Router,private poprodserv: PoproductService) {}
  poproduct : PoProductsList = new PoProductsList()
  

  ngOnInit(): void {

  }

  savePoProduct()
  {alert(JSON.stringify(this.poproduct))
    this.poprodserv.savePOProducts(this.poproduct).subscribe({
      next:(data)=> {
        sessionStorage.setItem('response',this.poproduct.prod_name+' is saved successfully!')
          this.router.navigate(['viewpoproduct'])
      },
      error:(err)=>{
        sessionStorage.setItem('reserr',this.poproduct.prod_name+' is not saved ')
          this.router.navigate(['viewpoproduct'])
      }
    })
  }
}
