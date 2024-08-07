import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/Models/Vendor';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.css']
})
export class EditvendorComponent implements OnInit{

  vendlist : any
  vendor : Vendor = new Vendor()
  constructor(private router : Router,private vendserv : VendorService,private route : ActivatedRoute) {}
  ngOnInit(): void {
      let vid =  this.route.snapshot.params['id'];
     
      this.vendserv.getVendorById(vid).subscribe({
        next :(data)=> {
           this.vendor= data 
        },
        error:()=>{
          sessionStorage.setItem('reserr','No Vendor found')
          this.router.navigate(['viewvendors'])
        }
      })
  }

  updateVendor()
  {
    this.vendserv.updateVendor(this.vendor).subscribe({
      complete:() =>{
          sessionStorage.setItem('response','Vendor '+this.vendor.vendor_name+' is updated successfully')
          this.router.navigate(['viewvendors']);
      },
      error :(err) =>{
        sessionStorage.setItem('reserr','Vendor '+this.vendor.vendor_name+' is not updated ')
        this.router.navigate(['viewvendors']);
      },
    })
  }
}
