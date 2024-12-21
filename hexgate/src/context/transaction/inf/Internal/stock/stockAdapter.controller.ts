import { Injectable } from "@nestjs/common";
import { TransactionSPort } from "src/context/stock/domain/Internal/TransactionPort.interface";
import { StockDTO } from "src/context/transaction/domain/Internal/stock/stockDTO.interface";
import { StockPort } from "src/context/transaction/domain/Internal/stock/stockPort.interface";
import { StockUpdateDTO } from "src/context/transaction/domain/Internal/stock/stockUpdate.interface";

@Injectable()
export class StockAdapter extends StockPort{
    constructor(private readonly transactionPort: TransactionSPort){
        super();
    }
    async updateStocks(stocks: StockUpdateDTO[]): Promise<StockDTO[]> {
        return (await this.transactionPort.updateStocks(stocks));
    }
    
}