import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from "angular2/common";
import {SignupService} from "./signupService";
import {Router,RouterLink} from 'angular2/router';

@Component({
    selector: 'signup',
    templateUrl: './app/components/signup/signup.html',
    directives:[FORM_DIRECTIVES,RouterLink]
})

export class SignupComponent {
    resObj:any;
    message:string;
    
    constructor(private signupService:SignupService,private router:Router){}
    
    onSubmit(user:any):void{
        console.log('submit '+JSON.stringify(user));
        this.signupService.createUser(user)
        //.map(res => res.json())        
        .subscribe(
           (res) =>{
				this.resObj = res.json();
				if(this.resObj.success){
			         this.message=""
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
                    console.log('res obj: ',this.resObj);
                    this.router.navigate(['Login']);
                    console.info('Success');
                }
        );
    }
    
}