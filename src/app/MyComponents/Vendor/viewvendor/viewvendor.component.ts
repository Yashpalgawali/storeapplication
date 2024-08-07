import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-viewvendor',
  templateUrl: './viewvendor.component.html',
  styleUrls: ['./viewvendor.component.css']
})
export class ViewvendorComponent {

  reserr : any;
  response : any;
  vendorlist : Vendor[] = []
  constructor(private vendserv : VendorService,private router : Router) {}

  ngOnInit(): void {
      this.vendserv.getAllVendors().subscribe({
        next:(data)=> {
          this.vendorlist= data
          if(sessionStorage.getItem('response')!=null) 
            {
               this.response =sessionStorage.getItem('response')
               setTimeout(() => {
                   sessionStorage.removeItem('response')
                   this.response=""
               }, 5000);
            }

            if(sessionStorage.getItem('reserr')!=null) 
              {
                 this.response =sessionStorage.getItem('reserr')
                 setTimeout(() => {
                     sessionStorage.removeItem('reserr')
                     this.reserr=""
                 }, 5000);
              }
        },
        error:(err)=> {
            sessionStorage.setItem('reserr','No Vendors Found')
            this.router.navigate(['viewvendors'])
        },
      })
  }

  getvendorbyid(vid : number)
  {
   this.router.navigate(['edit/vendor/',vid])
  }

}
