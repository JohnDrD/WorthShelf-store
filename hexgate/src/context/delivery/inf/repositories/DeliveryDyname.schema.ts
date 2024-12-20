import { randomUUID } from 'crypto';
import * as dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';

export class DeliverySchemaType extends Item{
    uuid:string
    postCode:string
    country: string
    city:string
    address:string
    status:string
    dateCreated?:number
    dateSend?:number
    dateFinish?:number
    transactionId:string
}
export const DeliverySchema= new dynamoose.Schema({
    uuid:{
        type: String,
        hashKey:true,
        default: randomUUID()
    },
    postCode:String,
    transactionId:{type:String, index:true},
    country:String,
    address:String,
    status:String,
    dateSend:Number,
    dateFinish:Number,
    dateCreated:Number,
})

export const DeliveryModel = dynamoose.model<DeliverySchemaType>("WCostumer", DeliverySchema);