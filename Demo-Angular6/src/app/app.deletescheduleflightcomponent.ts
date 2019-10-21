import {Component, OnInit} from '@angular/core'
import { ScheduleFlight } from './_model/app.scheduleflight';
import { ScheduleFlightService } from './_service/app.scheduleflightservice';

@Component({
    selector:'delsf',
    templateUrl:'app.deletescheduleflight.html'
})

export class DeleteScheduleFlightComponent implements OnInit{
   scheduleflightList:ScheduleFlight[]=[];
  // scheduleFlightId:number;
   public popoverTitle:string="Delete Confirmation";
   public popoverMessage:string="Do you really want to delete";
   public confirmClicked:boolean=false;
   public cancelClicked:boolean=false;
    constructor(private service:ScheduleFlightService){
    }
    ngOnInit():void{
        this.service.showScheduleFlights().subscribe((data:ScheduleFlight[])=>this.scheduleflightList=data);
    }
    removeScheduleFlight(scheduleFlightId:any):any{

        
        this.service.removeScheduleFlight(scheduleFlightId).subscribe();
    }
    

}