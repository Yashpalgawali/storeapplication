import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseOrder } from 'src/app/Models/PurchaseOrder';
import { PurchaseOrderProducts } from 'src/app/Models/PurchaseOrderProducts';
import { PoproductService } from 'src/app/Services/poproduct.service';
import { PurchaseorderService } from 'src/app/Services/purchaseorder.service';
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
    private vendserv : VendorService,private purchaseorderserv : PurchaseorderService) {
     
     }

prodlist : any
po_prod_list : any
purchase_order : PurchaseOrder =new PurchaseOrder()
po_product : PurchaseOrderProducts =new PurchaseOrderProducts()
tempid :any
vendlist :any
poid :any
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

    if(sessionStorage.getItem('poid')!=null)
    {
      this.poid = Number(sessionStorage.getItem('poid')!)
      
      this.purchaseorderserv.getePurchaseOrderById(this.poid).subscribe({
        next:(data) => {
          sessionStorage.setItem('po_temp_id',''+data.order_id)
        },
      })
    }


    this.tempid = sessionStorage.getItem('po_temp_id')

    if(sessionStorage.getItem('po_temp_id')!=null)
    {
      this.purchaseordprodserv.getPurchaseOrderProductsByTempId(this.tempid).subscribe({
      next:(data)=> {
        this.po_prod_list =data  
        alert(JSON.stringify(data))
      },
      error : (err)=>{
        alert("error")
      }
      })
    }
  }

  updatePurchaseOrderProducts() {
    this.purchaseorderserv.savePurchaseOrder(this.purchase_order).subscribe({
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

  updatePOProducts(purchase_prod : NgForm) {
    this.purchaseordprodserv.savePurchaseOrderProducts(this.po_product).subscribe({
      next:(data) => {
        this.prodlist = data
        alert('Inside save poproducts() '+ JSON.stringify(data) )

        sessionStorage.setItem('po_temp_id',''+this.prodlist[0].temp_id)
        
        setTimeout(() => {
          purchase_prod.reset()
          this.ngOnInit()
        }, 1);
      }
  })
  }

  removePurchaseOrderProduct(prodid : number)
  { 
    alert('IDF '+prodid)
    this.purchaseordprodserv.removePOProductById(prodid).subscribe({
      next : (data) => {
          alert(data)
      },
      error : (err) => {
          alert("Product is not removed")
      },
    })
  }
}
