import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditNote } from 'src/app/Models/CreditNote';
import { Invoice } from 'src/app/Models/Invoice';
import { InvoiceService } from 'src/app/Services/invoice.service';

@Component({
  selector: 'app-addcreditnote',
  templateUrl: './addcreditnote.component.html',
  styleUrls: ['./addcreditnote.component.css']
})
export class AddcreditnoteComponent implements OnInit{

  invlist : any
  creditnote : CreditNote = new CreditNote()
  invoice : Invoice = new Invoice()
  constructor(private router : Router,private invserv : InvoiceService ){}

  ngOnInit(): void {
    this.invserv.getAllInvoices().subscribe({
      next: (data) =>{
          this.invlist = data  
      },

    })
  }

  saveTempCreditNoteProduct(crnote : any)
  {

  }


  getInvoiceProductsByInvoiceNumber(){
    alert('Invoice Number is '+JSON.stringify(this.invoice ))
  }
}
