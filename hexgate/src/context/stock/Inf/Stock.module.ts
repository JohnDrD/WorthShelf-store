import { Module } from "@nestjs/common";
import { StockSerice } from "../application/Stock.service";
import { StockRepository } from "../domain/stocks.repository";
import { StockDB } from "./repositories/Dynamo/StockDynamo.db";
import { StocksController } from "./Http/StockHttp.controller";
import { DynamoConnection } from "src/context/shared/DynamoDB/inf/DynamoDBConnection.db";

@Module({
exports:[StockSerice],
controllers:[StocksController],
providers:[
    StockSerice,
    StockDB,
    {
        provide: StockRepository,
        useExisting: StockDB
    },
    DynamoConnection
]
})
export class StockModule{}