import {Component, OnInit} from '@angular/core'
import { ScheduleFlight } from './_model/app.scheduleflight';
import { ScheduleFlightService } from './_service/app.scheduleflightservice';
import { Flight } from "./_model/app.flight";
import { Schedule } from "./_model/app.schedule";
import { AirportService } from './_service/app.airportservice';


@Component({
    selector:'searchsf',
    templateUrl:'app.search.html'
})

export class SearchScheduleFlightComponent {
    // testList:Test[]=[];
    // searchId:number;
    // flag:boolean=false;

    // updateId:number;
    // currTest:Test={"testId":0, "testName":"",
    // "testDuration":,"startTime":"", "endTime":""}
    scheduleFlightId:number;
    scheduleflight:ScheduleFlight={scheduleFlightId:null,sourceAirport:"",destinationAirport:"",departureDateTime:null, arrivalDateTime:null,ticketCost:null}
    
    
    constructor(private service:ScheduleFlightService){

    }
    

    // ngOnInit():void{
    //     this.service.showAllTests().subscribe();
    // }
    searchScheduleFlight(scheduleFlightId:number){
        
    
        this.service.searchScheduleFlight(scheduleFlightId).subscribe((data:ScheduleFlight)=>this.scheduleflight=data);
        
    }
}
