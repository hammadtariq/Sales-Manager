import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from "angular2/http";

@Injectable()
export class HeaderService {
    header:Headers;
    _user:any = null;

    constructor(public http:Http) {
        this.header = new Headers();
        this.header.set('Content-Type', 'application/json');
    }

    logout(){
        return this.http.get('/api/logout');
    }
}