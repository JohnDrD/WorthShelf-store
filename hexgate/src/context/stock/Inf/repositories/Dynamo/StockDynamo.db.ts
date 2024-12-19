
import { StockRepository } from "src/context/stock/domain/stocks.repository";
import { StockModel } from "./StockDynamo.schema";
import { StockPrimValues } from "src/context/stock/domain/stockPrimValues.interface";
import { Stock } from "src/context/stock/domain/stock";
import { Injectable } from "@nestjs/common";
import { UpdateStockDAO } from "src/context/stock/domain/DAO/updateStock.dao";

@Injectable()
export class StockDB extends StockRepository{
    async getStocks(amount: number, lastId?: string): Promise<StockPrimValues[]> {
        const query= StockModel.scan().limit(amount);
        if(lastId && lastId!=''){
            query.startAt({uuid:lastId})
        }
        const snapshot= await query.exec();
        return snapshot;
    }
    async create(stock: Stock): Promise<StockPrimValues> {
        return await StockModel.create(stock.toValue());
    }
   async  getById(id: string): Promise<StockPrimValues | null> {
        const  data= await StockModel.get(id);
        return new  Stock(data).toValue();
    }
    
}