import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoProductsList } from 'src/app/Models/PoProductsList';
import { PoproductService } from 'src/app/Services/poproduct.service';

@Component({
  selector: 'app-editpoproduct',
  templateUrl: './editpoproduct.component.html',
  styleUrls: ['./editpoproduct.component.css']
})
export class EditpoproductComponent implements OnInit{
  
  poproduct : PoProductsList = new PoProductsList()

  constructor(private route : ActivatedRoute, private poprodserv : PoproductService ,private router : Router) {}
  
  ngOnInit(): void {
   let pid = this.route.snapshot.params['id']
   this.poprodserv.getPoProductsById(pid).subscribe({
      next:(data)=>{
        this.poproduct = data
        this.poproduct.gst_rate = this.poproduct.igst_per
      },
      error :(err)=> {
          sessionStorage.setItem('reserr','No Product Found for given ID ');
          this.router.navigate(['viewpoproduct'])
      },
   })
  }

  updatePoProduct() {
    alert(JSON.stringify(this.poproduct))
    this.poprodserv.updatePOProducts(this.poproduct).subscribe({
      complete:() => {
        sessionStorage.setItem('response', this.poproduct.prod_name+' is updated Successfully');
        this.router.navigate(['viewpoproduct'])
      },
      error : (err) =>{
        sessionStorage.setItem('reserr', this.poproduct.prod_name+' is not updated');
        this.router.navigate(['viewpoproduct'])
      },
    })
  }

}
