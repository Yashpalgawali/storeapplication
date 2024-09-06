import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/Models/Invoice';
import { Product } from 'src/app/Models/Product';
import { Temp_Invoice } from 'src/app/Models/Temp_Invoice';
import { CustomerService } from 'src/app/Services/customer.service';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { ProductService } from 'src/app/Services/product.service';
import { TempinvoiceService } from 'src/app/Services/tempinvoice.service';
//import $ from 'jquery';

@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.component.html',
  styleUrls: ['./addinvoice.component.css']
})
export class AddinvoiceComponent implements OnInit{

  invoice : Invoice = new Invoice()
  tempinvoice : Temp_Invoice = new Temp_Invoice()
  prodlist : Product[] = []
  //tempinvlist : Temp_Invoice[] = []
  tempinvlist : any
  custlist : any
  constructor(private invserv : InvoiceService, private router : Router,
              private teinvserv : TempinvoiceService,
              private prodserv: ProductService,
              private custserv : CustomerService ){ }

  ngOnInit(): void {

    this.custserv.getAllCustomers().subscribe({
      next : (data) =>{
        this.custlist = data
      }
    })

    this.prodserv.getAllProducts().subscribe({
      next:(data)=>{
        this.prodlist =data
      }
    });
    let tempid = JSON.parse(sessionStorage.getItem('temp_invoice_id') || '{}' );
    // let tempid = JSON.parse(sessionStorage.getItem('temp_invoice_id')! );
    
    if(sessionStorage.getItem('temp_invoice_id')!=null)
    {
      this.teinvserv.getTempInvoicesbyTempInvoiceId(tempid).subscribe({
        next:(data) => {
          this.tempinvlist = data
        },
      });
    }
  }

  onFocusOutEvent(event: any)
  {
    let gst = (18/100)+1;
    let res = event.target.value / gst;
    (<HTMLInputElement>document.getElementById("unit_price")).value = ""+res;
  }

  saveTempInvoice(tmpinv : NgForm) { 
        
         this.teinvserv.saveTempInvoice(this.tempinvoice).subscribe({
          next:(data)=>{
            this.tempinvlist = data
            sessionStorage.setItem('temp_invoice_id',JSON.stringify(this.tempinvlist[0]['temp_invoice_id']))
            tmpinv.reset()
          },
          error:(e)=>{
            alert('failed')
          }
         })
  }

  public saveInvoice()
  {
    this.invoice.order_id = JSON.parse(sessionStorage.getItem('temp_invoice_id')!)
   
    this.invserv.saveInvoice(this.invoice).subscribe({
      next : (data) => {
        sessionStorage.setItem('response','Invoice is saved successfully')
        sessionStorage.removeItem('temp_invoice_id')
       
        this.router.navigate(['viewinvoice'])
      },
      error : (err) => {
        alert('NOT Saved')
      }
    })
  }


  deleteTempInvoiceProductbyId(invnum : string) {
    let res = confirm('Do you want remove this product?')
    if(res){
        this.teinvserv.deleteTempInvoiceProductById(invnum).subscribe({
          next:(data)=>{
              alert('Product removed successfully!! '+data)
              this.ngOnInit()
          },
          error : (err) => {
              alert('Product not removed from list')
          },
        })
    }
  }
}
