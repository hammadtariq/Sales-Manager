System.register(['angular2/core', "./loginService", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, loginService_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (loginService_1_1) {
                loginService_1 = loginService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_loginService, router) {
                    this._loginService = _loginService;
                    this.router = router;
                }
                LoginComponent.prototype.onSubmit = function (user) {
                    var _this = this;
                    console.log('submit ' + JSON.stringify(user));
                    this._loginService.loginUser(user)
                        .subscribe(function (res) {
                        _this.resObj = res.json();
                        if (_this.resObj.success) {
                            _this.message = "We have sent you a registration email! Please follow the instructions sent to complete your registration process";
                        }
                        else {
                            throw _this.resObj.message;
                        }
                    }, function (err) {
                        //this.message = err
                        console.error('i am in ERROR! ', err);
                    }, function () {
                        console.log('res: ', _this.resObj);
                        _this._loginService.user = _this.resObj;
                        localStorage['userToken'] = _this.resObj.user.FirebaseToken;
                        _this.router.navigate(['Home']);
                        console.info('Success');
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: './app/components/login/login.html',
                        directives: [router_1.RouterLink],
                        styles: [
                            "\n        .mdl-layout {\n            align-items: center;\n            justify-content: center;\n        }\n        .mdl-layout__content {\n            padding: 24px;\n            flex: none;\n        }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [loginService_1.LoginService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.js.map