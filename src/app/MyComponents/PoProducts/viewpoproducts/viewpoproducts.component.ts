import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoproductService } from 'src/app/Services/poproduct.service';

@Component({
  selector: 'app-viewpoproducts',
  templateUrl: './viewpoproducts.component.html',
  styleUrls: ['./viewpoproducts.component.css']
})
export class ViewpoproductsComponent implements OnInit{

  constructor(private poprodserv : PoproductService,private router : Router) {}

  poprodlist : any
  response :any
  reserr : any
  ngOnInit(): void {
    this.poprodserv.getAllPoProducts().subscribe({
      next:(data) => {
        this.poprodlist = data
        console.log(JSON.stringify(this.poprodlist))
        if(sessionStorage.getItem('response')!=null){
          this.response = sessionStorage.getItem('response')
            setTimeout(() => {
              sessionStorage.removeItem('response')
              this.response=""
            }, 3000);
        }
        if(sessionStorage.getItem('reserr')!=null){
          this.reserr = sessionStorage.getItem('reserr')
            setTimeout(() => {
              sessionStorage.removeItem('reserr')
              this.reserr=""
            }, 3000);
        }
      },
    })
  }

  getPoProductById(pid : number)
  {
    this.router.navigate(['edit/poproduct/',pid])
  }
}
