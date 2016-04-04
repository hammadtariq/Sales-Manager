import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from "angular2/common";
import {LoginService} from "./loginService";
import {Router,RouterLink} from 'angular2/router';

@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.html',
    directives:[RouterLink],
    styles:[
        `
        .mdl-layout {
            align-items: center;
            justify-content: center;
        }
        .mdl-layout__content {
            padding: 24px;
            flex: none;
        }
        `
    ]
})

export class LoginComponent {

    resObj:any;
    message:string;

    constructor(private _loginService:LoginService,private router:Router){}

    onSubmit(user:any):void{
        console.log('submit '+JSON.stringify(user));
        this._loginService.loginUser(user)
            //.map(res => res.json())
            .subscribe(
                (res) =>{
                    this.resObj = res.json();
                    if(this.resObj.success){
                        this.message="We have sent you a registration email! Please follow the instructions sent to complete your registration process"
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
                    console.log('res: ',this.resObj);
                    this._loginService.user = this.resObj;
                    localStorage['userToken'] = this.resObj.user.FirebaseToken;
                    this.router.navigate(['Home']);
                    console.info('Success')
                }
            );
    }
    
}