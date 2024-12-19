import { randomUUID } from 'crypto';
import * as dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';

export class StockSchemaType extends Item{
    uuid: string;
    name: string;
    desciption:string;
    unitValue: number;
    stock: number;
    images: string[];
    description: string;
    dateCreated:number;
}
export const StockSchema= new dynamoose.Schema({
    uuid:{
        type: String,
        hashKey:true,
        default: randomUUID()
    },
    name: String,
    description:String,
    unitValue: Number,
    stock: Number,
    images: {
        type: Array,
        schema:[String]
    },
    dateCreated:Number
})

export const StockModel = dynamoose.model<StockSchemaType>("WStock", StockSchema);