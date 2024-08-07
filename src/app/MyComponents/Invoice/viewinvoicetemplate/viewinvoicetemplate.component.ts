import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { InvoiceService } from 'src/app/Services/invoice.service';

@Component({
  selector: 'app-viewinvoicetemplate',
  templateUrl: './viewinvoicetemplate.component.html',
  styleUrls: ['./viewinvoicetemplate.component.css']
})
export class ViewinvoicetemplateComponent implements  OnInit {

  invprodlist : any
  invoice_num : any
  invoice : any

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

  customer : Customer = new Customer()

  constructor(private invserv : InvoiceService, 
              private custserv : CustomerService,
              private router : Router , private route :ActivatedRoute ) { }

  ngOnInit(): void {
    this.invoice_num = this.route.snapshot.params[('id')]
   
    this.invserv.getInvoiceById(this.invoice_num).subscribe({
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
                alert(JSON.stringify(this.invprodlist[i]))
                this.qt = +JSON.stringify(this.invprodlist[i].qty)
                this.sbt = +JSON.stringify(this.invprodlist[i].subtotal)
                this.cgst = +JSON.stringify(this.invprodlist[i].cgst)
                this.sgst =  this.cgst 
                this.igst = +JSON.stringify(this.invprodlist[i].igst)
              
                this.subtotal = this.subtotal+ this.sbt
                if(this.cgst!=0)
                  {
                    this.cgst_per = +JSON.stringify(this.invprodlist[i].cgst_per)
                    this.sgst_per = +JSON.stringify(this.invprodlist[i].cgst_per)
                    this.igst_per = 0
                    this.tot_cgst = this.tot_cgst + this.cgst
                    alert('CGST = '+this.cgst+'\n total cgst = '+this.tot_cgst)
                  }
                  if(this.igst!=0)
                    {
                      this.igst_per = this.igst_per
                      this.sgst_per = 0
                      this.cgst_per = 0

                      this.tot_igst = this.tot_igst + this.igst
                    }
                this.total_qty = this.total_qty + this.qt
                this.final_total =  this.subtotal+this.cgst+this.sgst+this.igst
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
}
