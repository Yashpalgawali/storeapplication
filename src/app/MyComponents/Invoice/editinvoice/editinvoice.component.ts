import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/Models/Invoice';
import { Temp_Invoice } from 'src/app/Models/Temp_Invoice';
import { CustomerService } from 'src/app/Services/customer.service';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { ProductService } from 'src/app/Services/product.service';
import { TempinvoiceService } from 'src/app/Services/tempinvoice.service';

@Component({
  selector: 'app-editinvoice',
  templateUrl: './editinvoice.component.html',
  styleUrls: ['./editinvoice.component.css']
})
export class EditinvoiceComponent implements OnInit{

  constructor(private router : Router,private invserv : InvoiceService,private route : ActivatedRoute,
              private prodserv : ProductService,private tempinvserv : TempinvoiceService,
              private custserv : CustomerService
            ){ }

  tempinvoice : Temp_Invoice = new Temp_Invoice()
  prodlist : any
  invoice :  Invoice = new Invoice()
  tempinvlist : any
  custlist :any

  ngOnInit(): void {
      let invid = this.route.snapshot.params['id']
      this.invserv.getInvoiceById(invid).subscribe({
        next :(data) => {
            this.invoice = data
            alert("Invoice found \n "+JSON.stringify(this.invoice))
            
            this.tempinvserv.getTempInvoicesbyTempInvoiceId(this.invoice.order_id).subscribe({
              next:(data) => {
                this.tempinvlist = data

                alert("Inside tempinvoice \n"+ JSON.stringify(this.tempinvlist))
              }

            })
        },
        error :(err)=> {
            sessionStorage.setItem('reserr','No Invoice found for given ID ');
            this.router.navigate(['viewinvoice'])
        },
      })

      this.prodserv.getAllProducts().subscribe({
        next:(data)=>{
          this.prodlist = data
        }
      })
      this.custserv.getAllCustomers().subscribe({
        next : (data) => {
            this.custlist =data
        },
      })
  }

  onFocusOutEvent(event: any)
  {
    let gst = (18/100)+1;
    let res = event.target.value / gst;
    (<HTMLInputElement>document.getElementById("unit_price")).value = ""+res;
  }

  saveTempInvoice () {

  }


  updateInvoice()
  {

  }
}
