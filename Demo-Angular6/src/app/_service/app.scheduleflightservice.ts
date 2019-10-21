import {Injectable, Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ScheduleFlight } from '../_model/app.scheduleflight';

@Injectable({
   providedIn:'root' 
})

export class ScheduleFlightService{
    constructor(private myhttp:HttpClient){}

    showScheduleFlights(){
       return this.myhttp.get("http://localhost:9088/scheduleFlight/showdata");
    }

    addScheduleFlight(scheduleFlight:ScheduleFlight){
       return this.myhttp.post<ScheduleFlight>("http://localhost:9088/scheduleFlight/add",scheduleFlight);
    }
    
    modifyScheduleFlight(data:any){
   
        return this.myhttp.put("http://localhost:9088/scheduleFlight/modify",data);
    }
    searchScheduleFlight(data:any){
        
        return this.myhttp.get("http://localhost:9088/scheduleFlight/search",data);
    }

    removeScheduleFlight(data:any){
       return this.myhttp.delete("http://localhost:9088/scheduleFlight/delete"+data);
    }
}