import { Injectable } from "@nestjs/common";
import { TransactionSPort } from "../../domain/Internal/TransactionPort.interface";
import { UpdateStockDTO } from "../../application/DTO/updateStock.dto";
import { StockPrimValues } from "../../domain/stockPrimValues.interface";
import { UpdateStocks } from "../../application/updateStocks/updateStocks";

@Injectable()
export class TransactionAdapter extends TransactionSPort{
    constructor(private updateCase: UpdateStocks){
        super();
    }

   async updateStocks(stocks: UpdateStockDTO[]): Promise<StockPrimValues[]> {
        const data= await this.updateCase.execute(stocks)
        return data.data??[]
    }    
}