import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PurchaseOrder } from 'src/app/Models/PurchaseOrder';
import { PurchaseOrderProducts } from 'src/app/Models/PurchaseOrderProducts';
import { PurchaseorderService } from 'src/app/Services/purchaseorder.service';
import { PurchaseorderproductsService } from 'src/app/Services/purchaseorderproducts.service';

@Component({
  selector: 'app-printpurchaseorder',
  templateUrl: './printpurchaseorder.component.html',
  styleUrls: ['./printpurchaseorder.component.css']
})
export class PrintpurchaseorderComponent implements OnInit{

  //poprodlist : PurchaseOrderProducts[] = []  
  poprodlist : any
  subtotal=0;		
  final_total=0;
  m=0;
  total_qty=0;
  qt !: number
  sbt !: number
  cgst !: number
  sgst !: number    
  igst !: number
  cgst_per !: number
  sgst_per !: number
  igst_per !: number
  tot_cgst = 0
  tot_sgst = 0
  tot_igst = 0 
  transport_charge =0
  packing_charge =0
  formattedNumber : any
  prefix : any
  purchase_order : PurchaseOrder = new PurchaseOrder()

  constructor(private purchaseorderserv : PurchaseorderService,
              private route : ActivatedRoute,
              private poprodserv : PurchaseorderproductsService){}
  

  ngOnInit(): void {
    let poid = this.route.snapshot.params['id']
    this.purchaseorderserv.getePurchaseOrderById(poid).pipe(
      switchMap(first => {
        this.purchase_order = first
        const ID = first.order_id
        return this.poprodserv.getPurchaseOrderProductsByTempId(ID)
      }),
      
    ).subscribe({
      next: (data) => {
        this.poprodlist = data

       // alert(JSON.stringify(data))
        for(let i=0;i<this.poprodlist.length;i++)
          {  
             this.qt =   (this.poprodlist[i].qty)
            // this.sbt =  (this.poprodlist[i].subtotal)
             this.cgst = (this.poprodlist[i].cgst)
             this.sgst = this.cgst 
             this.igst = (this.poprodlist[i].igst)
            
             this.subtotal =  this.subtotal + (this.poprodlist[i].unit_price *this.poprodlist[i].qty)
            this.subtotal = Math.round( this.subtotal * 100 + Number.EPSILON ) / 100
            if(this.cgst!=0)
            {
              this.cgst_per = (this.poprodlist[i].cgst_per)
              this.sgst_per = this.cgst_per
              this.igst_per = 0
              this.tot_cgst = this.tot_cgst + this.cgst
             
              this.tot_cgst= Math.round( this.tot_cgst * 100 + Number.EPSILON ) / 100

              this.tot_sgst = this.tot_cgst

            }
            if(this.igst!=0)
            {
              this.igst_per = this.igst_per
              this.sgst_per = 0
              this.cgst_per = 0

              this.tot_igst = this.tot_igst + this.igst
            }
            this.total_qty = this.total_qty + this.qt
            this.final_total =  this.subtotal+this.tot_cgst+this.tot_sgst+this.tot_igst
            this.final_total =   Math.round( this.final_total * 100 + Number.EPSILON ) / 100
          }
         // alert('subtotal '+this.subtotal)
      },
    })
  }
  formatNumber(num : any) {

  }
}
