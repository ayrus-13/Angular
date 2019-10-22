import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import { AddScheduleFlightComponent } from './app.addscheduleflightcomponent';
import { ShowScheduleFlightComponent } from './app.showscheduleflightcomponent';
<<<<<<< HEAD
import { SearchScheduleFlightComponent } from './app.searchscheduleflightcomponent';
import { ModifyScheduleFlightComponent } from './app.modifyscheduleflightcomponent';
import { DeleteScheduleFlightComponent } from './app.deletescheduleflightcomponent';
=======
import { ModifyScheduleFlightComponent } from './app.modifyscheduleflightcomponent';
import { DeleteScheduleFlightComponent } from './app.deletescheduleflightcomponent';
import { SearchScheduleFlightComponent } from './app.searchscheduleflightcomponent';
import {Routes,RouterModule}  from '@angular/router'; 
>>>>>>> 3e6b32de6e92a6d17442a26e928aa4768468cbff

const myroute:Routes=[
    {path:'modify',component:ModifyScheduleFlightComponent},
    {path:'delete',component:DeleteScheduleFlightComponent},
    {path:'add',component:AddScheduleFlightComponent},
    {path:'show',component:ShowScheduleFlightComponent},
    {path:'search',component:SearchScheduleFlightComponent},
    { path: '**', redirectTo: '/homePage', pathMatch: 'full' },
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,HttpClientModule,RouterModule.forRoot(myroute)
        
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