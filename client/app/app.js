System.register(['angular2/core', './components/signup/signup', './components/login/login', './components/home/home', 'angular2/router', './components/signup/signupService', './components/login/loginService', './components/home/main/addSalesman/salesmanService', './components/home/main/addProducts/addProductService', './components/home/header/headerService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, signup_1, login_1, home_1, router_1, signupService_1, loginService_1, salesmanService_1, addProductService_1, headerService_1;
    var SalesmanApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (signup_1_1) {
                signup_1 = signup_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (signupService_1_1) {
                signupService_1 = signupService_1_1;
            },
            function (loginService_1_1) {
                loginService_1 = loginService_1_1;
            },
            function (salesmanService_1_1) {
                salesmanService_1 = salesmanService_1_1;
            },
            function (addProductService_1_1) {
                addProductService_1 = addProductService_1_1;
            },
            function (headerService_1_1) {
                headerService_1 = headerService_1_1;
            }],
        execute: function() {
            SalesmanApp = (function () {
                function SalesmanApp() {
                }
                SalesmanApp = __decorate([
                    core_1.Component({
                        selector: 'salesman-app',
                        template: "\n    <router-outlet></router-outlet>\n    ",
                        directives: [login_1.LoginComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [signupService_1.SignupService, loginService_1.LoginService, salesmanService_1.SalesmanService, addProductService_1.ProductService, headerService_1.HeaderService]
                    }),
                    router_1.RouteConfig([
                        { path: '/home/...', name: 'Home', component: home_1.HomeComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_1.LoginComponent },
                        { path: '/signup', name: 'Signup', component: signup_1.SignupComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], SalesmanApp);
                return SalesmanApp;
            }());
            exports_1("SalesmanApp", SalesmanApp);
        }
    }
});
//# sourceMappingURL=app.js.map