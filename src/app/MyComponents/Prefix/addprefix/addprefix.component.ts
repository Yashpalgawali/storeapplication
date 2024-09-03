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
        this.router.navigate(['viewprefix'])
      },
      error : (err) => {
        sessionStorage.setItem('reserr','Prefix is not updated')
        this.router.navigate(['viewprefix'])
      },
    })
  }
}
