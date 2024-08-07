import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{

product : Product = new Product()

constructor(private prodserv : ProductService,private route : ActivatedRoute, private router : Router) {}

ngOnInit(): void {  
 let pid = this.route.snapshot.params['id']
     
this.prodserv.getProductById(pid).subscribe({
  next :(data) =>{
    this.product = data
  },
  error : (err) => {
    this.router.navigate(['viewproduct'])
  }
})
}

  updateProduct(prod :NgForm)
  {
    this.prodserv.updateProduct(this.product).subscribe({
      complete:()=>{
        sessionStorage.setItem('response','Product '+this.product.prod_name+' is updated successfully');
        prod.reset()

        this.router.navigate(['viewproduct'])
      },
      error :(err)=> {
        sessionStorage.setItem('reserr','Product '+this.product.prod_name+' is not updated');
        this.router.navigate(['viewproduct'])
      },
    })
  }
}
