import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  customer : Customer = new Customer()

  cust_id !: number
  constructor(private route : ActivatedRoute , private custserv : CustomerService,private router : Router){ }

  ngOnInit(): void {
    this.cust_id = this.route.snapshot.params['id']

    this.custserv.getCustomerById(this.cust_id).subscribe({
      next:(data) =>{
          this.customer = data
      },
      error : (err) => {
          sessionStorage.setItem('reserr','No Customer found for given ID')
          this.router.navigate(['/viewcustomer'])
      },
    })
  }
  updateCustomer()
  {
    this.custserv.updateCustomer(this.customer).subscribe({
       complete:()=> {
           sessionStorage.setItem('response',this.customer.cust_first_name+' '+this.customer.cust_last_name+' is updated successfully')
           this.router.navigate(['/viewcustomer'])
       },
       error : (err) => {
        sessionStorage.setItem('reserr',this.customer.cust_first_name+' '+this.customer.cust_last_name+' is not updated')
        this.router.navigate(['/viewcustomer'])
       },
    })
  }
}
