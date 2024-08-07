import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{

  constructor(private prodserv : ProductService,private router : Router){ }

  product : Product  = new Product()
  ngOnInit(): void { }

  onSubmit()
  {
    this.prodserv.saveProduct(this.product).subscribe({
      complete:() =>{
          sessionStorage.setItem('response','The product '+ this.product.prod_name +' is saved successfully')
          this.router.navigate(['/viewproduct'])

      },
    })
  }
}
