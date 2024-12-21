
import { StockRepository } from "src/context/stock/domain/stocks.repository";
import { StockModel } from "./StockDynamo.schema";
import { StockPrimValues } from "src/context/stock/domain/stockPrimValues.interface";
import { Stock } from "src/context/stock/domain/stock.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class StockDB extends StockRepository{
   async updateStock(id: string, data: StockPrimValues): Promise<StockPrimValues> {
        return StockModel.update(id,data)
    }
   async getBatch(ids: string[]): Promise<StockPrimValues[]> {
        return await StockModel.batchGet(ids)
    }
    async getStocks(amount: number, lastId?: string): Promise<StockPrimValues[]> {
        const query= StockModel.scan().limit(amount);
        if(lastId && lastId!=''){
            query.startAt({uuid:lastId})
        }
        const snapshot= await query.exec();
        return snapshot;
    }

   async  getById(id: string): Promise<StockPrimValues | null> {
        const  data= await StockModel.get(id);
        return new  Stock(data).toValue();
    }
    
}