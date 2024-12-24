import { TransactionSPort } from '../../../../stock/domain/Internal/TransactionPort.interface';
import { StockDTO } from '../../../domain/Internal/stock/stockDTO.interface';
import { StockPort } from '../../../domain/Internal/stock/stockPort.interface';
import { StockUpdateDTO } from '../../../domain/Internal/stock/stockUpdate.interface';
export declare class StockAdapter extends StockPort {
    private readonly transactionPort;
    constructor(transactionPort: TransactionSPort);
    updateStocks(stocks: StockUpdateDTO[]): Promise<StockDTO[]>;
}
