import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseOrder } from 'src/app/Models/PurchaseOrder';
import { PurchaseOrderProducts } from 'src/app/Models/PurchaseOrderProducts';
import { PoproductService } from 'src/app/Services/poproduct.service';
import { PurchaseorderService } from 'src/app/Services/purchaseorder.service';
import { PurchaseorderproductsService } from 'src/app/Services/purchaseorderproducts.service';


import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-addpurchaseorder',
  templateUrl: './addpurchaseorder.component.html',
  styleUrls: ['./addpurchaseorder.component.css']
})
export class AddpurchaseorderComponent implements OnInit {

  constructor(private router : Router , private poprodserv : PoproductService, 
              private purchaseordprodserv : PurchaseorderproductsService ,
              private vendserv : VendorService,private purchaseorderservice : PurchaseorderService) { }
  
  prodlist : any
  po_prod_list : any
  purchase_order : PurchaseOrder =new PurchaseOrder()
  po_product : PurchaseOrderProducts =new PurchaseOrderProducts()
  tempid :any
  vendlist :any

  ngOnInit(): void { 
    this.vendserv.getAllVendors().subscribe({
      next:(data) => {
          this.vendlist = data
      },
    }) 
    this.poprodserv.getAllPoProducts().subscribe({
      next :(data) => {
          this.prodlist = data
      },
    })

    this.tempid = sessionStorage.getItem('po_temp_id')
    alert("temp_po_id = "+this.tempid)
    if(this.tempid != null)
    {
      this.purchaseordprodserv.getPurchaseOrderProductsByTempId(this.tempid).subscribe({
        next:(data)=> {
            this.po_prod_list = data
            alert('Inside getPurchaseOrderProductsByTempId() '+this.tempid+' \n products are '+JSON.stringify(data))

        },
        error : (err)=>{
          alert("error")
        }
      })
    }
  }

  savePurchaseOrderProducts(purchase_prod : NgForm)
  {
    this.purchaseordprodserv.savePurchaseOrderProducts(this.po_product).subscribe({
        next:(data) => {
          this.po_product = data
          alert('Inside save poproducts() '+ JSON.stringify(data) )

          sessionStorage.setItem('po_temp_id',''+this.po_product.temp_id)
          
          setTimeout(() => {
            purchase_prod.reset()
            this.ngOnInit()
          }, 1);
        }
    })
  }

  savePurchaseOrder() {
    console.log(JSON.stringify(this.purchase_order))
    // alert('Inside savepurchaseorder \n '+JSON.stringify(purchase_ord))
    this.purchaseorderservice.savePurchaseOrder(this.purchase_order).subscribe({
      complete:()=> {
        sessionStorage.removeItem('po_temp_id')
        sessionStorage.setItem('response','Purchase Order is saved successfully')
          this.router.navigate(['viewpurchaseorder'])
      },
      error: (err) => {
        sessionStorage.setItem('reserr','Purchase Order is not saved')
        this.router.navigate(['viewpurchaseorder'])
      },
    })
     
  }

  removeitem(prod_id :number) {
    alert('Prod ID '+prod_id)
    this.purchaseordprodserv.removePOProductById(prod_id).subscribe({
      next:(data)=> {
          alert(JSON.stringify(data))
      },
      error: (err) => {
          alert(JSON.stringify(err))
      },
    })
  }
}
