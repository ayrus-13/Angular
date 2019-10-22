import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import { AddScheduleFlightComponent } from './app.addscheduleflightcomponent';
import { ShowScheduleFlightComponent } from './app.showscheduleflightcomponent';
import { SearchScheduleFlightComponent } from './app.searchscheduleflightcomponent';
import { ModifyScheduleFlightComponent } from './app.modifyscheduleflightcomponent';
import { DeleteScheduleFlightComponent } from './app.deletescheduleflightcomponent';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,HttpClientModule
        
    ],
    declarations: [
        AppComponent,
        AddScheduleFlightComponent,
        ShowScheduleFlightComponent,
        SearchScheduleFlightComponent,
        ModifyScheduleFlightComponent,
        DeleteScheduleFlightComponent

		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }