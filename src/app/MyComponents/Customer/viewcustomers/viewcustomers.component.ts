import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.css']
})
export class ViewcustomersComponent {

  response : any
  reserr   : any
  custlist : Customer[] =[]

  constructor(private custserv : CustomerService,private router : Router) {}

  ngOnInit(): void {
      this.custserv.getAllCustomers().subscribe({
          next:(data)=> {
            this.custlist=data
            
            if(sessionStorage.getItem('response')!=null)
              {
                this.response = sessionStorage.getItem('response')
                setTimeout(() => {
                  this.response=""
                  sessionStorage.removeItem('response')
                  
                }, 3000);
              }
              if(sessionStorage.getItem('reserr')!=null)
              {
                this.reserr = sessionStorage.getItem('reserr')
                setTimeout(() => {
                  this.reserr=""
                  sessionStorage.removeItem('reserr')
                }, 3000);
              }
          },
      })
  }
  
  getcustomerbyid(customer_id : number) {

    this.router.navigate(['/edit/customer/',customer_id])
  }
}
