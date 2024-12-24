import { UpdateStockDTO } from "../../application/DTO/updateStock.dto";
import { StockPrimValues } from "../stockPrimValues.interface";
export declare abstract class TransactionSPort {
    abstract updateStocks(stocks: UpdateStockDTO[]): Promise<StockPrimValues[]>;
}
