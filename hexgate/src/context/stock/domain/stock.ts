import { randomUUID } from "crypto";
import { StockPrimValues } from "./stockPrimValues.interface";

export class Stock{
    constructor(private attr:StockPrimValues ){}

    static create(createStock:{
    name:string;
    unitValue:number;
    stock: number;
    description: string;
    images: string[];
    }){
        return new Stock({...createStock, uuid: randomUUID(),dateCreated: new Date().getTime()})
    }

    toValue(): StockPrimValues{
        return this.attr;
    }

}