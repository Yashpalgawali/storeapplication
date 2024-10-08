import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Customer } from 'src/app/Models/Customer';
import { Invoice } from 'src/app/Models/Invoice';
import { CustomerService } from 'src/app/Services/customer.service';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { PrefixService } from 'src/app/Services/prefix.service';

@Component({
  selector: 'app-viewinvoicetemplate',
  templateUrl: './viewinvoicetemplate.component.html',
  styleUrls: ['./viewinvoicetemplate.component.css'],
  providers : [DecimalPipe]
})
export class ViewinvoicetemplateComponent implements  OnInit {

  invprodlist : any
  invoice_id : any
  invoice : Invoice = new Invoice()

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
  formattedNumber : any
  prefix : any

  customer : Customer = new Customer()

  constructor(private invserv : InvoiceService, 
              private custserv : CustomerService,
              private router : Router , private route :ActivatedRoute,private decimalPipe: DecimalPipe,
              private prefixserv : PrefixService) { }

  ngOnInit(): void {
    this.invoice_id = this.route.snapshot.params[('id')]
    this.prefixserv.getPrefixById(1).subscribe({
      next : (data )=>{
        this.prefix = data
      }
    })
    this.invserv.getInvoiceById(this.invoice_id).subscribe({
      next:(data) =>{
        this.invoice = data
        
        this.custserv.getCustomerById(this.invoice.customer.customer_id).subscribe({
          next :(res) =>{
            this.customer = res 
          },
          error : (err) => {
              alert('error')
          },
        })

        this.invserv.getInvoiceProductsByOrderId(this.invoice.order_id).subscribe({
          next:(result) =>{
             
              this.invprodlist = result
              for(let i=0;i<this.invprodlist.length;i++)
              { 
                this.qt =   +JSON.stringify(this.invprodlist[i].qty)
                this.sbt =  +JSON.stringify(this.invprodlist[i].subtotal)
                this.cgst = +JSON.stringify(this.invprodlist[i].cgst)
                this.sgst = this.cgst 
                this.igst = +JSON.stringify(this.invprodlist[i].igst)
             
                this.subtotal = this.subtotal+ this.sbt
                this.subtotal = Math.round( this.subtotal * 100 + Number.EPSILON ) / 100
                if(this.cgst!=0)
                {
                  this.cgst_per = +JSON.stringify(this.invprodlist[i].cgst_per)
                  //this.sgst_per = +JSON.stringify(this.invprodlist[i].cgst_per)
                  this.sgst_per = this.cgst_per
                  this.igst_per = 0
                  this.tot_cgst = this.tot_cgst + this.cgst
                 
                  //this.tot_cgst=Math.round(this.tot_cgst+ Number.EPSILON)
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
          },
          error:(err)=> {
              alert("No products ");
          },
        })
      },
      error :(err) =>{
        alert("no Invoice ")
      }
    })
  }

  formatNumber(number :any ){
    return Math.round( number * 100 + Number.EPSILON ) / 100
  }
}
