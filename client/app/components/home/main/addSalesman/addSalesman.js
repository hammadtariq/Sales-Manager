System.register(['angular2/core', 'angular2/router', 'angular2/common', "./salesmanService"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, salesmanService_1;
    var AddSalesman;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (salesmanService_1_1) {
                salesmanService_1 = salesmanService_1_1;
            }],
        execute: function() {
            AddSalesman = (function () {
                function AddSalesman(_salesmanService) {
                    this._salesmanService = _salesmanService;
                    this.addFlag = false;
                    this.randomId = 'Please wait we are generating your Id';
                    this.salesmanArr = [];
                    this.companyId = localStorage['userToken'];
                }
                AddSalesman.prototype.ngOnInit = function () {
                    this.getAllSalesman();
                };
                AddSalesman.prototype.getAllSalesman = function () {
                    var _this = this;
                    this._salesmanService.getAllSalesmans(this.companyId)
                        .subscribe(function (res) {
                        _this.resObj = res.json();
                        if (_this.resObj.success) {
                            console.info('Salesman registered with Id!');
                        }
                        else {
                            throw _this.resObj.message;
                        }
                    }, function (err) {
                        //this.message = err
                        console.error('i am in ERROR! ', err);
                    }, function () {
                        _this.salesmanArr = _this.resObj.data;
                        console.log(_this.resObj);
                        console.log(_this.salesmanArr);
                        console.info('Success');
                    });
                };
                AddSalesman.prototype.onAddBtn = function () {
                    this.addFlag = true;
                    var that = this;
                    setTimeout(function () {
                        if (that.addFlag) {
                            that.randomId = Math.floor((Math.random() * 1000) + 100);
                        }
                        else {
                            that.randomId = 'unable to create your id';
                        }
                    }, 2000);
                };
                AddSalesman.prototype.add = function (salesman) {
                    var _this = this;
                    salesman['companyId'] = this.companyId;
                    console.log('salesman:  ', salesman);
                    this._salesmanService.createSalesman(salesman)
                        .subscribe(function (res) {
                        var resObj = res.json();
                        if (resObj.success) {
                            console.info('Salesman registered with Id!');
                        }
                        else {
                            throw resObj.message;
                        }
                    }, function (err) {
                        //this.message = err
                        console.error('i am in ERROR! ', err);
                    }, function () {
                        _this.addFlag = false;
                        console.info('Success');
                    });
                };
                AddSalesman = __decorate([
                    core_1.Component({
                        selector: 'add-salesman',
                        templateUrl: './app/components/home/main/addSalesman/addSalesman.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [salesmanService_1.SalesmanService])
                ], AddSalesman);
                return AddSalesman;
            }());
            exports_1("AddSalesman", AddSalesman);
        }
    }
});
//# sourceMappingURL=addSalesman.js.map