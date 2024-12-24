import { TransactionSPort } from "../../domain/Internal/TransactionPort.interface";
import { UpdateStockDTO } from "../../application/DTO/updateStock.dto";
import { StockPrimValues } from "../../domain/stockPrimValues.interface";
import { UpdateStocks } from "../../application/updateStocks/updateStocks";
export declare class TransactionAdapter extends TransactionSPort {
    private updateCase;
    constructor(updateCase: UpdateStocks);
    updateStocks(stocks: UpdateStockDTO[]): Promise<StockPrimValues[]>;
}
