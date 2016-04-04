import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from "angular2/http";

@Injectable()
export class ProductService{
    header: Headers;
    constructor(public http: Http) {
        this.header = new Headers();
        this.header.set('Content-Type', 'application/json');
    }

    createProduct(data){
        return this.http.post('/api/addProducts', JSON.stringify({data:data}), {headers:this.header});
    }

    getAllProducts(companyId){
        return this.http.get('/api/getAllProducts?companyId='+companyId, {headers:this.header});
    }

}
