import {Component,OnInit} from '@angular/core';
import {ProductService} from './service/app.productservice';
import {Product} from './_model/app.productmodel';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'show',
    templateUrl:'app.show.html'
})

export class ShowComponent implements OnInit{
    products:Product[]=[];
    parameter:{}
    constructor(private service:ProductService,private activatedRoute: ActivatedRoute){
        console.log("NIn gghc in constructor")
       
        
    }
    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.parameter=params})
            console.log(this.parameter["showId"]);
            this.service.getAllData().subscribe((data:Product[])=>this.products=data.filter(x=>x.prodId==this.parameter["showId"]));
            console.log(this.products.length)
    }
    getProducts(){
        return this.products.length;
    }        
}