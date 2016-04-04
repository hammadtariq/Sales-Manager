System.register(['angular2/core', 'angular2/router', './headerService', './../../login/loginService', '../../../directives/MaterialDesignLiteUpgradeElement'], function(exports_1, context_1) {
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
    var core_1, router_1, headerService_1, loginService_1, router_2, MaterialDesignLiteUpgradeElement_1;
    var Header;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (headerService_1_1) {
                headerService_1 = headerService_1_1;
            },
            function (loginService_1_1) {
                loginService_1 = loginService_1_1;
            },
            function (MaterialDesignLiteUpgradeElement_1_1) {
                MaterialDesignLiteUpgradeElement_1 = MaterialDesignLiteUpgradeElement_1_1;
            }],
        execute: function() {
            Header = (function () {
                function Header(_headerService, _loginService, router) {
                    this._headerService = _headerService;
                    this._loginService = _loginService;
                    this.router = router;
                }
                Header.prototype.ngOnInit = function () {
                    this.company = this._loginService.user;
                    console.log(this.company);
                };
                Header.prototype.logout = function () {
                    var _this = this;
                    this._headerService.logout()
                        .subscribe(function (res) {
                        _this.resObj = res.json();
                        if (_this.resObj.success) {
                        }
                        else {
                            throw _this.resObj.message;
                        }
                    }, function (err) {
                        //this.message = err
                        console.error('i am in ERROR! ', err);
                    }, function () {
                        localStorage['userToken'] = '';
                        _this._loginService.user = null;
                        _this.router.navigate(['Login']);
                        console.info('Success');
                    });
                };
                Header = __decorate([
                    core_1.Component({
                        selector: 'header',
                        templateUrl: './app/components/home/header/header.html',
                        directives: [router_1.ROUTER_DIRECTIVES, MaterialDesignLiteUpgradeElement_1.MDL],
                        styleUrls: ['./app/css/styles.css'],
                    }), 
                    __metadata('design:paramtypes', [headerService_1.HeaderService, loginService_1.LoginService, router_2.Router])
                ], Header);
                return Header;
            }());
            exports_1("Header", Header);
        }
    }
});
//# sourceMappingURL=header.js.map