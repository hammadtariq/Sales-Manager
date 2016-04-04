import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from "angular2/http";

@Injectable()
export class SalesmanService{
    header: Headers;
    constructor(public http: Http) {
        this.header = new Headers();
        this.header.set('Content-Type', 'application/json');
    }

    createSalesman(data){
        return this.http.post('/api/addSalesman', JSON.stringify({data:data}), {headers:this.header});
    }

    getAllSalesmans(companyId){
        return this.http.get('/api/getAllSalesmans?companyId='+companyId, {headers:this.header});
    }

}