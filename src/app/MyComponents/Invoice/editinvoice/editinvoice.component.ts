import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/Models/Invoice';
import { Invoice_Product } from 'src/app/Models/Invoice_Product';
import { Temp_Invoice } from 'src/app/Models/Temp_Invoice';
import { CustomerService } from 'src/app/Services/customer.service';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { InvoiceproductService } from 'src/app/Services/invoiceproduct.service';
import { ProductService } from 'src/app/Services/product.service';
import { TempinvoiceService } from 'src/app/Services/tempinvoice.service';

@Component({
  selector: 'app-editinvoice',
  templateUrl: './editinvoice.component.html',
  styleUrls: ['./editinvoice.component.css']
})
export class EditinvoiceComponent implements OnInit {

  constructor(private router : Router,private invserv : InvoiceService,private route : ActivatedRoute,
              private prodserv : ProductService,private tempinvserv : TempinvoiceService,
              private custserv : CustomerService,private invprodserv : InvoiceproductService
            ) { }

  tempinvoice : Temp_Invoice = new Temp_Invoice()
  prodlist : any
  invprodlist : any 
  invoice :  Invoice = new Invoice()
  tempinvlist : any
  custlist : any
  invproduct : Invoice_Product = new Invoice_Product()

  ngOnInit(): void {
      let invid = this.route.snapshot.params['id']
      this.invserv.getInvoiceById(invid).subscribe({
        next :(data) => {
            this.invoice = data 
             this.invprodserv.getInvoiceProductsByOrderId(this.invoice.order_id).subscribe({
              next :(data) =>{
                  this.invprodlist = data
              },
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


  saveInvoiceProduct(invprod : NgForm){
    
    this.invprodserv.addInvoiceProduct(this.invproduct).subscribe({
      next:(data) =>{
        this.ngOnInit()
      },
      error :(err) =>{
          alert('not saved')
      }
    })
  }
  saveTempInvoice (tmpinv : NgForm) {

    // this.tempinvserv.saveTempInvoice(this.tempinvoice).subscribe({
    //   next:(data)=>{
    //     this.tempinvlist = data
    //     alert(JSON.stringify((this.tempinvlist[0]['temp_invoice_id'])))
    //    // sessionStorage.setItem('temp_invoice_id',JSON.stringify(this.tempinvlist[0]['temp_invoice_id']))
    //     tmpinv.reset()
    //   },
    //   error:(e)=>{
    //     alert('failed')
    //   }
    // })
  }


  updateInvoice()
  {
    this.invserv.updateInvoiceById(this.invoice).subscribe({
      next:(data)=>{
        sessionStorage.setItem('response','Invoice is updated successfully')
        this.router.navigate(['/viewinvoice'])
      },
      error:(err) =>{
        sessionStorage.setItem('reserr','Invoice is not updated')
        this.router.navigate(['/viewinvoice'])
      },
    })
  }

  deleteTempInvoiceProductbyId(invnum : number) {
    alert('invoice num '+invnum)
    let res = confirm('Do you want remove this product?')
    if(res){
      this.invprodserv.deleteInvoiceProductById(invnum).subscribe({
        next:(data)=>{
          alert('Product removed successfully!! ')
          this.ngOnInit()
        },
        error: (err) =>{
          alert('Product not removed from list')
        },
      })
    }
    else {
      alert('Product is not removed')
    }
  }
}
