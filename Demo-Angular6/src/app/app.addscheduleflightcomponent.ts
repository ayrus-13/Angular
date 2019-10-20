import { Component,OnInit,OnChanges,OnDestroy} from '@angular/core';
import {ScheduleFlightService} from './_service/app.scheduleflightservice';
import {ScheduleFlight} from './_model/app.scheduleflight';

@Component({
    selector : 'asf',
    templateUrl : './app.addscheduledflight.html'
})


export class AddScheduleFlightComponent implements OnInit{
    scheduleFlight: ScheduleFlight;
    model:ScheduleFlight;
    ngOnInit() {
        this.scheduleFlight=new ScheduleFlight();
        this.model=new ScheduleFlight();
    }
    
    constructor(private service:ScheduleFlightService){
        //console.log("NIn in constructor")
    }

    /*
    update:boolean=false;
    prodId:number;
    prodName:string;
    prodPrice:number;*/
    
   
    addScheduleFlight(){
        alert("adding");
        this.service.addScheduleFlight(this.model).subscribe((data)=>this.scheduleFlight=data);
    }
    /*removeScheduleFlight(scheduleFlightNumber):any{
        alert("deleting "+scheduleFlightNumber);
        this.service.removeScheduleFlight(scheduleFlightNumber).subscribe((data)=>console.log(data));
    }*/
    /*
    updateProduct(prodId,prodName,prodPrice):any{
        alert("updating "+prodId);
        for(var i=0;i<this.products.length;i++){
            alert(prodName+prodPrice);
            if(this.products[i].prodId==prodId){
                this.products.splice(i,1);
                this.products[i].prodName=prodName;
                this.products[i].prodPrice=prodPrice;
            }
            
        }
        
    }
    deleteProduct(prodId):any{
        alert("deleting "+prodId);
        for(var i=0;i<this.products.length;i++){
            if(this.products[i].prodId==prodId){
                this.products.splice(i,1);
            }   
        }
    }
    toggleStatus(prodId){
        for(var i=0;i<this.products.length;i++){
            if(this.products[i].prodId==prodId){
                this.products[i].update = true;
            }
        }
    }*/
}