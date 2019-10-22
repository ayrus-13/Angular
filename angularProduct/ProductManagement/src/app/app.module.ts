import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ProductComponent} from './app.productcomponent';
import {FormsModule}      from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import {ShowComponent}    from './app.showcomponent';
import {Routes,RouterModule}  from '@angular/router'; 


const myroute:Routes=[
    {path:'show/:showId',component:ShowComponent,pathMatch: 'full'},
    {path:'add',component:ProductComponent}
]


@NgModule({
    imports: [
        BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(myroute)
        
    ],
    declarations: [
        AppComponent,ProductComponent,ShowComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }