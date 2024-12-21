import { Module } from "@nestjs/common";
import { StockRepository } from "../domain/stocks.repository";
import { StockDB } from "./repositories/Dynamo/StockDynamo.db";
import { GetStocksCase } from "../application/getStocks/GetStocksCase";
import { GetStockByIdCase } from "../application/getById/stockGetByIdCase";
import { UpdateStocks } from "../application/updateStocks/updateStocks";
import { GetStockByIdController } from "./Http/GetByIdStock/getByIdStock.controller";
import { GetStocksController } from "./Http/GetStocks/getStocks.controller";
import { TransactionSPort } from "../domain/Internal/TransactionPort.interface";
import { TransactionAdapter } from "./Internal/transactionAdapter.controller";
import { SharedModule } from "src/context/shared/inf/shared.module";

@Module({
exports:[GetStocksCase, GetStockByIdCase,UpdateStocks,TransactionSPort],
controllers:[GetStockByIdController, GetStocksController],
providers:[
    GetStocksCase, GetStockByIdCase,UpdateStocks,
    StockDB,
    {
        provide: StockRepository,
        useExisting: StockDB
    },
    {
        provide: TransactionSPort,
        useClass: TransactionAdapter
    }
],
imports:[SharedModule]
})
export class StockModule{}