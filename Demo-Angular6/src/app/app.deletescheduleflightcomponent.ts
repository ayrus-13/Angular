<<<<<<< HEAD
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
=======
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
    

>>>>>>> 3e6b32de6e92a6d17442a26e928aa4768468cbff
}