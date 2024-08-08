import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/Services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit{

  constructor(private actserv : ActivityService) {}
  
  actlist : any

  ngOnInit(): void {
        this.actserv.getAllActivities().subscribe({
          next :(data) => {
              this.actlist=data
          },
        }) 
  }


}
