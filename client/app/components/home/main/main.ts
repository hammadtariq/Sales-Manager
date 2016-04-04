import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AddSalesman} from './addSalesman/addSalesman'
import {AddProducts} from './addProducts/addProducts';

@Component({
    selector: 'main',
    templateUrl: './app/components/home/main/main.html',
    directives:[ROUTER_DIRECTIVES,AddSalesman,AddProducts]
})

export class Main {

}
