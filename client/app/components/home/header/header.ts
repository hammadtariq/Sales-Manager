import {Component,OnInit,ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderService} from './headerService';
import {LoginService} from './../../login/loginService';
import {Router} from 'angular2/router';
import {MDL} from '../../../directives/MaterialDesignLiteUpgradeElement';

@Component({
    selector: 'header',
    templateUrl: './app/components/home/header/header.html',
    directives:[ROUTER_DIRECTIVES,MDL],
    styleUrls:['./app/css/styles.css'],
})

export class Header implements OnInit{
    resObj:any;
    company:any;
    constructor(private _headerService:HeaderService, private _loginService:LoginService, private router:Router){
    }

    ngOnInit(){
        this.company = this._loginService.user;
        console.log(this.company);
    }

    logout(){
        this._headerService.logout()
            //.map(res => res.json())
            .subscribe(
                (res) =>{
                    this.resObj = res.json();
                    if(this.resObj.success){
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
                    localStorage['userToken'] = '';
                    this._loginService.user = null;
                    this.router.navigate(['Login']);
                    console.info('Success')
                }
            );
    }

}