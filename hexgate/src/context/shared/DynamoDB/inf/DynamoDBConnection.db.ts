import { Injectable } from "@nestjs/common";
import * as dynamoose from 'dynamoose';

@Injectable()
export class DynamoConnection{
    constructor(){
        this.connect()
    }
    connect() {
       const ddb= new dynamoose.aws.ddb.DynamoDB({
            credentials:{
                accessKeyId:process.env.AWS_SK,
                secretAccessKey:process.env.AWS_SK
            },
            region: process.env.AWS_TZ
        })
        dynamoose.aws.ddb.set(ddb)
    }
    
}