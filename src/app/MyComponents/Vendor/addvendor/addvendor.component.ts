import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent {

  vendor : Vendor  = new Vendor()

  constructor(private vendserv : VendorService, private router : Router) {}
  onSubmit() {
    this.vendserv.saveVendor(this.vendor).subscribe({
      complete:()=> {
          sessionStorage.setItem('response','Vendor is saved successfully')
          this.router.navigate(['viewvendors'])
      },
      error:(err)=> {
        sessionStorage.setItem('reserr','Vendor is not saved ')
        this.router.navigate(['viewvendors'])
      },
    })
  }

}
