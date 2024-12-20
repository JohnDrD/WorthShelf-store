import { randomUUID } from "node:crypto";
import { TransactionPrimVal } from "./transactionPrimVal.interface";

export class Transaction{
    constructor( private attr:TransactionPrimVal ){}

    static create( data: {total: number,
        cartId: string,
        status:string,
        userId:string,
        uuid?:string,
    transactionID?:string,
    deliveryId?:string,
    dateCreated?: number,
    dateChanged?:number}){
        const date= new Date()
        return new Transaction({
            ...data,
            uuid: data.uuid?? randomUUID(),
            transactionID:data.transactionID??"",
            deliveryId:data.deliveryId??"",
            dateCreated:data.dateCreated??date.getTime(),
            dateChanged:data.dateChanged??date.getTime()
        })
    }

    toValue(){
        return {...this.attr}
    }

}