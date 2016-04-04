import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Product} from './product';
import {ProductService} from "./addProductService";

@Component({
    selector: 'add-product',
    templateUrl:'./app/components/home/main/addProducts/addProducts.html',
    directives:[ROUTER_DIRECTIVES,FORM_DIRECTIVES]
})

export class AddProducts implements OnInit{
    resObj:any;
    addFlag:boolean=false;
    randomId:any='Please wait we are generating your Id';
    productArr:any=[];
    companyId:string;

    constructor(private _productService:ProductService){
        this.companyId = localStorage['userToken'];
    }

    ngOnInit(){
        this.getAllProducts();
    }

    getAllProducts(){
        this._productService.getAllProducts(this.companyId)
            //.map(res => res.json())
            .subscribe(
                (res) =>{
                    this.resObj = res.json();
                    if(this.resObj.success){
                        console.info('Salesman registered with Id!');
                    }
                    else {
                        throw this.resObj.message;
                    }
                },
                (err)=>{
                    //this.message = err
                    console.error('i am in ERROR! ',err)
                },
                ()=>
                {
                    this.productArr = this.resObj.data;
                    console.log(this.resObj);
                    console.log(this.productArr);
                    console.info('Success');
                }
            );
    }

    onAddBtn(){
        this.addFlag = true;
        var that = this;
        setTimeout(function(){
            if(that.addFlag){
                that.randomId = Math.floor((Math.random() * 1000) + 100);
            }else{
                that.randomId = 'unable to create your id'
            }
        },2000)

    }

    add(product:Product){
        product['companyId'] = this.companyId;
        console.log(product);
        this._productService.createProduct(product)
            //.map(res => res.json())
            .subscribe(
                (res)=>{
                    var resObj = res.json();
                    if(resObj.success){
                        console.info('Product registered with Id!');
                    }
                    else {
                        throw resObj.message;
                    }
                },
                (err)=>{
                    //this.message = err
                    console.error('i am in ERROR! ',err)
                },
                ()=>
                {
                    this.addFlag = false;
                    console.info('Success');
                }
            );
    }

}
