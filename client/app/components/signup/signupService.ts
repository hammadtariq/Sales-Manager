import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from "angular2/http";

@Injectable()
export class SignupService{
    header: Headers;
    constructor(public http: Http) {
        this.header = new Headers();
        this.header.set('Content-Type', 'application/json');
    }
    
    createUser(data){  
        return this.http.post('/api/signup', JSON.stringify({data:data}), {headers:this.header});
	}
    
}