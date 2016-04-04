System.register(['angular2/core', 'angular2/router', 'angular2/common', "./addProductService"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, addProductService_1;
    var AddProducts;
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
            function (addProductService_1_1) {
                addProductService_1 = addProductService_1_1;
            }],
        execute: function() {
            AddProducts = (function () {
                function AddProducts(_productService) {
                    this._productService = _productService;
                    this.addFlag = false;
                    this.randomId = 'Please wait we are generating your Id';
                    this.productArr = [];
                    this.companyId = localStorage['userToken'];
                }
                AddProducts.prototype.ngOnInit = function () {
                    this.getAllProducts();
                };
                AddProducts.prototype.getAllProducts = function () {
                    var _this = this;
                    this._productService.getAllProducts(this.companyId)
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
                        _this.productArr = _this.resObj.data;
                        console.log(_this.resObj);
                        console.log(_this.productArr);
                        console.info('Success');
                    });
                };
                AddProducts.prototype.onAddBtn = function () {
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
                AddProducts.prototype.add = function (product) {
                    var _this = this;
                    product['companyId'] = this.companyId;
                    console.log(product);
                    this._productService.createProduct(product)
                        .subscribe(function (res) {
                        var resObj = res.json();
                        if (resObj.success) {
                            console.info('Product registered with Id!');
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
                AddProducts = __decorate([
                    core_1.Component({
                        selector: 'add-product',
                        templateUrl: './app/components/home/main/addProducts/addProducts.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [addProductService_1.ProductService])
                ], AddProducts);
                return AddProducts;
            }());
            exports_1("AddProducts", AddProducts);
        }
    }
});
//# sourceMappingURL=addProducts.js.map