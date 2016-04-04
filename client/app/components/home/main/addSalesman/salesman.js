System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Salesman;
    return {
        setters:[],
        execute: function() {
            Salesman = (function () {
                function Salesman(data) {
                    this.firstname = data.firstname;
                    this.lastname = data.lastname;
                    this.id = data.id;
                    this.cellNo = data.cellNo;
                }
                return Salesman;
            }());
            exports_1("Salesman", Salesman);
        }
    }
});
//# sourceMappingURL=salesman.js.map