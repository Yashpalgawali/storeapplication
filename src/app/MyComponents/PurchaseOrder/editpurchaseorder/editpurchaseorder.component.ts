import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseOrder } from 'src/app/Models/PurchaseOrder';
import { PurchaseOrderProducts } from 'src/app/Models/PurchaseOrderProducts';
import { PoproductService } from 'src/app/Services/poproduct.service';
import { PurchaseorderproductsService } from 'src/app/Services/purchaseorderproducts.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-editpurchaseorder',
  templateUrl: './editpurchaseorder.component.html',
  styleUrls: ['./editpurchaseorder.component.css']
})
export class EditpurchaseorderComponent {

  constructor(private router : Router , private poprodserv : PoproductService, 
    private purchaseordprodserv : PurchaseorderproductsService ,
    private vendserv : VendorService,) {
     
     }

prodlist : any
po_prod_list : any
purchase_order : PurchaseOrder =new PurchaseOrder()
po_product : PurchaseOrderProducts =new PurchaseOrderProducts()
tempid :any
vendlist :any

ngOnInit(): void {
      this.vendserv.getAllVendors().subscribe({
      next:(data)=> {
        this.vendlist = data
      },
    })

    this.poprodserv.getAllPoProducts().subscribe({
      next :(data) =>{
        this.prodlist = data
      },
    })

    this.tempid = sessionStorage.getItem('po_temp_id')

    if(sessionStorage.getItem('po_temp_id')!=null)
    {
      this.purchaseordprodserv.getPurchaseOrderProductsByTempId(this.tempid).subscribe({
      next:(data)=> {
        this.po_prod_list =data  
      },
      error : (err)=>{
        alert("error")
      }
      })
    }
  }

  updatePurchaseOrderProducts(purchase_prod  : NgForm) {

  }



  updatePOProducts(purchase_prod : NgForm) {

  }
}
