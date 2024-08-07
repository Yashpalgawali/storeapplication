import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {
  constructor(private router : Router,private prodserv : ProductService) {}

  prodlist : Product[] = []
  response : any
  reserr   : any
 // dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any> = new Subject<any>
  ngOnInit(): void {
    
    this.prodserv.getAllProducts().subscribe({
        next : (data) =>{
            this.prodlist = data
            if(sessionStorage.getItem('response')!=null)
            {
              this.response = sessionStorage.getItem('response')
              setTimeout(() => {
                
                sessionStorage.removeItem('response')
                this.response=""
              }, 3000);
            }
            if(sessionStorage.getItem('reserr')!=null)
            {
              this.reserr = sessionStorage.getItem('reserr')
              setTimeout(() => {
              
                sessionStorage.removeItem('reserr')
                this.reserr=""
              }, 3000);
            }
        },
    })
  }

  getproductbyid(pid : number)
  {
    this.router.navigate(['/edit/product/',pid])
  }
}
