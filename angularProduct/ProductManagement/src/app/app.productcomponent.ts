import { Component,OnInit,OnChanges,OnDestroy} from '@angular/core';
import {ProductService} from './service/app.productservice';
import {Product} from './_model/app.productmodel';
@Component({
    selector : 'prod',
    templateUrl : 'app.product.html'
})


export class ProductComponent implements OnInit,OnChanges{
   model:any={};
    ngOnInit(): void {
        console.log("ngOnInit method");
        this.service.getAllData().subscribe((data:Product[])=>this.products=data);
    }
    ngOnChanges(): void {
        console.log("In changes");
    }
    ngOndestroy(){
        console.log("In destroy");
    }
    constructor(private service:ProductService){
        console.log("NIn in constructor")
    }
    products:any[]=[
    ];
    /*
    update:boolean=false;
    prodId:number;
    prodName:string;
    prodPrice:number;*/
    
   
    addProduct():any{
        alert("adding");
        console.log(this.model);
        this.service.addProduct(this.model).subscribe((data)=>console.log(data));
    }
    deleteProduct(prodId):any{
        alert("deleting "+prodId);
        this.service.deleteProduct(prodId).subscribe((data)=>console.log(data));
    }
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