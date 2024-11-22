import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseorderService } from 'src/app/Services/purchaseorder.service';

@Component({
  selector: 'app-viewpurchaseorder',
  templateUrl: './viewpurchaseorder.component.html',
  styleUrls: ['./viewpurchaseorder.component.css']
})
export class ViewpurchaseorderComponent implements OnInit {

  polist : any
  response : any
  reserr : any

  constructor(private pordserv : PurchaseorderService,private router : Router ) {}
  
  ngOnInit(): void {
      this.pordserv.getAllPurchaseOrders().subscribe({
        next:(data) => {
          this.polist = data
        }
      })
    }

    getPurchaseOrder(poid :number){
      this.router.navigate(['view/purchaseorder/',poid])
    }
  }