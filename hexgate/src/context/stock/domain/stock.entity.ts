import { randomUUID } from "crypto";
import { StockPrimValues } from "./stockPrimValues.interface";
import { StockParams } from "./stockCreateParams.interface";

export class Stock{
    constructor(private attr:StockPrimValues ){}

    static create(createStock:StockParams){
        return new Stock({...createStock, 
            uuid: createStock.uuid?? randomUUID(),
            dateCreated:createStock.dateCreated?? new Date().getTime()})
    }

    toValue(): StockPrimValues{
        return this.attr;
    }

}