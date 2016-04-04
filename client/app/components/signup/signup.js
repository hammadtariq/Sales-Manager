System.register(['angular2/core', "angular2/common", "./signupService", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, signupService_1, router_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (signupService_1_1) {
                signupService_1 = signupService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(signupService, router) {
                    this.signupService = signupService;
                    this.router = router;
                }
                SignupComponent.prototype.onSubmit = function (user) {
                    var _this = this;
                    console.log('submit ' + JSON.stringify(user));
                    this.signupService.createUser(user)
                        .subscribe(function (res) {
                        _this.resObj = res.json();
                        if (_this.resObj.success) {
                            _this.message = "";
                        }
                        else {
                            throw _this.resObj.message;
                        }
                    }, function (err) {
                        //this.message = err
                        console.error('i am in ERROR! ', err);
                    }, function () {
                        console.log('res obj: ', _this.resObj);
                        _this.router.navigate(['Login']);
                        console.info('Success');
                    });
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'signup',
                        templateUrl: './app/components/signup/signup.html',
                        directives: [common_1.FORM_DIRECTIVES, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [signupService_1.SignupService, router_1.Router])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.js.map