import { Injectable } from "@nestjs/common";
import * as dynamoose from 'dynamoose';

@Injectable()
export class DynamoConnection{
    constructor(){
        this.connect()
    }
    connect() {
       const ddb= new dynamoose.aws.ddb.DynamoDB()
        dynamoose.aws.ddb.set(ddb)
    }
    
}