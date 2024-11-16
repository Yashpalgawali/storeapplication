import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prefix } from 'src/app/Models/Prefix';
import { PrefixService } from 'src/app/Services/prefix.service';

@Component({
  selector: 'app-addprefix',
  templateUrl: './addprefix.component.html',
  styleUrls: ['./addprefix.component.css']
})
export class AddprefixComponent implements OnInit {

  prefix : Prefix = new Prefix()
  prefixobj : any
  prefix_id !: number
  response : any
  reserr  : any

  constructor(private router : Router ,private prefixserv : PrefixService, private route : ActivatedRoute) {}

  ngOnInit(): void {
     
    this.prefixserv.getAllPrefixes().forEach(pre=>{
      this.prefix = pre[0]
    })
  }

  addPrefix() {
    this.prefixserv.updatePrefix(this.prefix).subscribe({
      complete: () => {
        sessionStorage.setItem('response','Prefix is updated successfully')
        this.response = 'Prefix is updated successfully'
        setTimeout(() => {
          sessionStorage.removeItem('response')
          this.response=''
        }, 3000);
        this.router.navigate(['addprefix'])
      },
      error : (err) => {
        sessionStorage.setItem('reserr','Prefix is not updated')
        this.reserr = 'Prefix is Not updated'
        setTimeout(() => {
          sessionStorage.removeItem('reserr')
          this.reserr=''
        }, 3000);
        this.router.navigate(['addprefix'])
      },
    })
  }
}
