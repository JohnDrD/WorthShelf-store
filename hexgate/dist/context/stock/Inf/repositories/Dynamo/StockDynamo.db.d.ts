import { StockRepository } from "src/context/stock/domain/stocks.repository";
import { StockPrimValues } from "src/context/stock/domain/stockPrimValues.interface";
export declare class StockDB extends StockRepository {
    updateStock(id: string, data: StockPrimValues): Promise<StockPrimValues>;
    getBatch(ids: string[]): Promise<StockPrimValues[]>;
    getStocks(amount: number, lastId?: string): Promise<StockPrimValues[]>;
    getById(id: string): Promise<StockPrimValues | null>;
}
