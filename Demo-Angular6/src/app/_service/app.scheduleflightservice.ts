import {Injectable, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ScheduleFlight } from '../_model/app.scheduleflight';

@Injectable({
   providedIn:'root' 
})

export class ScheduleFlightService{
    constructor(private myhttp:HttpClient){}

    showScheduleFlights(){
       return this.myhttp.get("http://localhost:9088/showdata");
    }

    addScheduleFlight(scheduleFlight:ScheduleFlight){
       //let form = new FormData();
       //form.append("Flight Number",data.scheduleFlightNumber);
       //form.append("Source Airport",data.sourceAirport);
       /*form.append("Destination Airport",data.destinationAirport);
       form.append("Departure Time",data.departureTime);
       form.append("Arrival Time",data.arrivalTime);
       form.append("Ticket Cost",data.ticketCost);*/
       return this.myhttp.post<ScheduleFlight>("http://localhost:9088/add",scheduleFlight);
    }
    
    modifyScheduleFlight(scheduleFlight:ScheduleFlight){
       
        return this.myhttp.put("http://localhost:9088/modify",scheduleFlight);
    }
    /*searchScheduleFlight(data:any){
        console.log(data);
        return this.myhttp.search();
    }*/

    removeScheduleFlight(scheduleFlightNumber:number){
       console.log("deleting");
       console.log(scheduleFlightNumber);
       return this.myhttp.delete("http://localhost:9088/delete"+scheduleFlightNumber);
    }
}