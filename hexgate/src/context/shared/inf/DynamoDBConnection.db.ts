import { Injectable } from "@nestjs/common";
import * as dynamoose from 'dynamoose';

@Injectable()
export class DynamoConnection{
    constructor(){
        this.connect()
    }
    connect() {
       const ddb= new dynamoose.aws.ddb.DynamoDB(
        {
            credentials:{
                accessKeyId: process.env.AWSACSSID,
                secretAccessKey:process.env.AWSSCSS
            },
            region: process.env.AWSR
        }
       )
        dynamoose.aws.ddb.set(ddb)
    }
    
}