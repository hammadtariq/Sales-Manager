export class Salesman{
    firstname:string;
    lastname:string;
    id:string;
    cellNo:number;
    addFlag:boolean;
    randomId:number|string;
    constructor(data:any){
        this.firstname=data.firstname;
        this.lastname=data.lastname;
        this.id=data.id;
        this.cellNo=data.cellNo;
    }

}
