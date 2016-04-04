import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Salesman} from './salesman';
import {SalesmanService} from "./salesmanService";

@Component({
    selector: 'add-salesman',
    templateUrl:'./app/components/home/main/addSalesman/addSalesman.html',
    directives:[ROUTER_DIRECTIVES,FORM_DIRECTIVES]
})

export class AddSalesman implements OnInit{
    resObj:any;
    addFlag:boolean=false;
    randomId:any='Please wait we are generating your Id';
    salesmanArr:any=[];
    companyId:string;
    constructor(private _salesmanService:SalesmanService){
        this.companyId = localStorage['userToken']
    }

    ngOnInit(){
        this.getAllSalesman();
    }

    getAllSalesman(){
        this._salesmanService.getAllSalesmans(this.companyId)
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
                    this.salesmanArr = this.resObj.data;
                    console.log(this.resObj);
                    console.log(this.salesmanArr);
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

    add(salesman:Salesman){
        salesman['companyId'] = this.companyId;
        console.log('salesman:  ',salesman);
        this._salesmanService.createSalesman(salesman)
            //.map(res => res.json())
            .subscribe(
                (res)=>{
                    var resObj = res.json();
                    if(resObj.success){
                        console.info('Salesman registered with Id!');
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
