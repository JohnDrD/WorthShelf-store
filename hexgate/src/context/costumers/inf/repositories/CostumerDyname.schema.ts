import { randomUUID } from 'crypto';
import * as dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';

export class CostumerSchemaType extends Item{
    uuid:string
    name:string
    email:string
    phone:string
    password:string
}
export const CostumerSchema= new dynamoose.Schema({
    uuid:{
        type: String,
        hashKey:true,
        default: randomUUID()
    },
    name:String,
    email:{type:String, index:true},
    phone:String,
    password:String

})

export const CostumerModel = dynamoose.model<CostumerSchemaType>("WCostumer", CostumerSchema);