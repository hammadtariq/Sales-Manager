import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {Header} from './header/header';
import {Main} from './main/main';
import {Footer} from './footer/footer';
import {LoginService} from  './../login/loginService';
import {Router} from 'angular2/router';
import {AddSalesman} from './main/addSalesman/addSalesman'
import {AddProducts} from './main/addProducts/addProducts'
import {DashboardComponent} from './dashboard/dashboard'

@Component({
    selector: 'home',
    template: `
        <header></header>
        <main class="mdl-layout__content">
        <router-outlet></router-outlet>
        </main>
        <footer></footer>
    `,
    styles:[`

    `],
    directives:[ROUTER_DIRECTIVES,Header,Footer]
})

@RouteConfig([
    {path:'/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault:true},
    {path:'/products', name: 'Products', component: AddProducts},
    {path:'/salesman', name: 'Salesmans', component: AddSalesman},
])

export class HomeComponent {

    constructor(private _loginService:LoginService, private router:Router){
        if(localStorage['userToken'] != ''){
            console.log('wow');
        }
        else{
            this.router.navigate(['Login']);
        }
    }

}
