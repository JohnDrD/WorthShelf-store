import { Injectable } from "@nestjs/common";
import { TransactionSPort } from '../../../../stock/domain/Internal/TransactionPort.interface'
import { StockDTO } from '../../../domain/Internal/stock/stockDTO.interface' 
import { StockPort } from '../../../domain/Internal/stock/stockPort.interface'
import { StockUpdateDTO } from '../../../domain/Internal/stock/stockUpdate.interface'
@Injectable()
export class StockAdapter extends StockPort{
    constructor(private readonly transactionPort: TransactionSPort){
        super();
    }
    async updateStocks(stocks: StockUpdateDTO[]): Promise<StockDTO[]> {
        return (await this.transactionPort.updateStocks(stocks));
    }
    
}