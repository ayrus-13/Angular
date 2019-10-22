import { Component,OnInit,OnChanges,OnDestroy} from '@angular/core';
import {ScheduleFlightService} from './_service/app.scheduleflightservice';
import {ScheduleFlight} from './_model/app.scheduleflight';
import {Flight} from './_model/app.flight';
import {FlightService} from './_service/app.flightservice';
import {AirportService} from './_service/app.airportservice';
import {Airport} from './_model/app.airport';

@Component({
    selector : 'dsf',
    templateUrl : './app.delete.html'
})


export class DeleteScheduleFlightComponent implements OnInit{
    scheduleFlight: ScheduleFlight;
    model:ScheduleFlight;
    ngOnInit() {
        this.scheduleFlight=new ScheduleFlight();
        this.model=new ScheduleFlight();
    }
    
    constructor(private service:ScheduleFlightService){
        //console.log("NIn in constructor")
    }
    removeScheduleFlight(scheduleFlightNumber):any{
        alert("deleting "+scheduleFlightNumber);
        this.service.removeScheduleFlight(scheduleFlightNumber).subscribe((data)=>console.log(data));
    }
}