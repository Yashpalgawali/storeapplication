import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit{

  customer : Customer = new Customer()
  constructor(private custserv : CustomerService,private router : Router) {}

  ngOnInit(): void {  }

  onSubmit(){
    this.custserv.saveCustomer(this.customer).subscribe({
        complete:()=> {
          sessionStorage.setItem('response','Customer '+this.customer.cust_first_name+' '+this.customer.cust_last_name+' is saved successfully')
          this.router.navigate(['viewcustomers'])
        },
        error:(err)=> {
          sessionStorage.setItem('reserr','Customer '+this.customer.cust_first_name+' '+this.customer.cust_last_name+' is not saved')
          this.router.navigate(['viewcustomers'])
        },
    })
  }
}
