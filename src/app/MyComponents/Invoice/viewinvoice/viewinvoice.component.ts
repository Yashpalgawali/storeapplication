import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from 'src/app/Services/invoice.service';

@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.component.html',
  styleUrls: ['./viewinvoice.component.css']
})
export class ViewinvoiceComponent implements OnInit{
  
  invlist : any
  constructor(private invserv : InvoiceService , private router : Router) {}

  ngOnInit(): void {
      this.invserv.getAllInvoices().subscribe({
        next:(data) => {
            this.invlist = data
        },
      })
  }

  getinvoicebyid(invid :number)
  {
    this.router.navigate(['edit/invoice/',invid])
  }

  viewinvoicebyid(invid: any) {
    this.router.navigate(['view/invoice/',invid])
  }
    
    

}
