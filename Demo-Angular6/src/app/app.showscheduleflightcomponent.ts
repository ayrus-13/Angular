import {Component,OnInit} from '@angular/core';
import {ScheduleFlightService} from './_service/app.scheduleflightservice';
import {ScheduleFlight} from './_model/app.scheduleflight';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'show',
    templateUrl:'app.showscheduleflight.html'
})

export class ShowScheduleFlightComponent implements OnInit{
    scheduleFlights:ScheduleFlight[]=[];
    flag:boolean=true;
    parameter:{}
    constructor(private service:ScheduleFlightService){
        //console.log("NIn gghc in constructor")
       
        
    }
    ngOnInit() {
        
            //this.parameter=params})
            this.service.showScheduleFlights().subscribe((data:ScheduleFlight[])=>this.scheduleFlights=data);
            //console.log(this.scheduleFlights.length)
    }
    showScheduleFlights(){
        this.service.showScheduleFlights().subscribe((data:ScheduleFlight[])=>this.scheduleFlights=data);
            
    }
   
        
}