System.register(['angular2/core', 'angular2/router', './header/header', './footer/footer', './../login/loginService', './main/addSalesman/addSalesman', './main/addProducts/addProducts', './dashboard/dashboard'], function(exports_1, context_1) {
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
    var core_1, router_1, header_1, footer_1, loginService_1, router_2, addSalesman_1, addProducts_1, dashboard_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (footer_1_1) {
                footer_1 = footer_1_1;
            },
            function (loginService_1_1) {
                loginService_1 = loginService_1_1;
            },
            function (addSalesman_1_1) {
                addSalesman_1 = addSalesman_1_1;
            },
            function (addProducts_1_1) {
                addProducts_1 = addProducts_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_loginService, router) {
                    this._loginService = _loginService;
                    this.router = router;
                    if (localStorage['userToken'] != '') {
                        console.log('wow');
                    }
                    else {
                        this.router.navigate(['Login']);
                    }
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n        <header></header>\n        <main class=\"mdl-layout__content\">\n        <router-outlet></router-outlet>\n        </main>\n        <footer></footer>\n    ",
                        styles: ["\n\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES, header_1.Header, footer_1.Footer]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent, useAsDefault: true },
                        { path: '/products', name: 'Products', component: addProducts_1.AddProducts },
                        { path: '/salesman', name: 'Salesmans', component: addSalesman_1.AddSalesman },
                    ]), 
                    __metadata('design:paramtypes', [loginService_1.LoginService, router_2.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.js.map