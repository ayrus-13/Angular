import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import { AddScheduleFlightComponent } from './app.addscheduleflightcomponent';
import { ShowScheduleFlightComponent } from './app.showscheduleflightcomponent';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,HttpClientModule
        
    ],
    declarations: [
        AppComponent,
        AddScheduleFlightComponent,
        ShowScheduleFlightComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }