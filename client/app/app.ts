import {Component} from 'angular2/core';
import {SignupComponent} from './components/signup/signup';
import {LoginComponent} from './components/login/login';
import {HomeComponent} from './components/home/home';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SignupService} from './components/signup/signupService';
import {LoginService} from './components/login/loginService';
import {SalesmanService} from './components/home/main/addSalesman/salesmanService'
import {ProductService} from './components/home/main/addProducts/addProductService';
import {HeaderService} from './components/home/header/headerService';
import {SalesmansComponent} from './components/home/header/salesmans/salesmans'
@Component({
    selector: 'salesman-app',
    template: `
    <router-outlet></router-outlet>
    `,
    directives:[LoginComponent,ROUTER_DIRECTIVES],
    providers:[SignupService, LoginService, SalesmanService, ProductService, HeaderService]
})

@RouteConfig([
  {path:'/home/...', name: 'Home', component: HomeComponent, useAsDefault:true},
  {path:'/login', name: 'Login', component: LoginComponent},
  {path:'/signup', name: 'Signup', component: SignupComponent},

])

export class SalesmanApp { }
