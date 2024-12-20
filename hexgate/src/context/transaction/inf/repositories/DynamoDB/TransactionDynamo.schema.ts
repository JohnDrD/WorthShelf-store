import { randomUUID } from 'crypto';
import * as dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';

export class TransactionSchemaType extends Item{
    uuid:string;
    total: number
    dateCreated: number;
    dateChanged:number;
    productsList: {id:string, amount:number}[];
    userId:string;
    deliveryId?:string;
    status:string
    transactionID?:string
}
const productSchema= new dynamoose.Schema({
    id: String,
    amount:Number
})
export const TransactionSchema= new dynamoose.Schema({
    uuid:{
        type: String,
        hashKey:true,
        default: randomUUID()
    },
    status:String,
    productsList: {
        type: Array,
        schema:[productSchema]
    },
    userId:String,
    deliveryId:{ type:String, default:""},
    transactionID:{ type:String, default:""},
    total: Number

},
{timestamps:{
    createdAt:["dateCreated"],
    updatedAt:["dateChanged"],
}})

export const TransactionModel = dynamoose.model<TransactionSchemaType>("WTransaction", TransactionSchema);