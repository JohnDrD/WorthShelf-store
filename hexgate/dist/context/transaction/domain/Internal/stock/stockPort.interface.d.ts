import { StockDTO } from "./stockDTO.interface";
import { StockUpdateDTO } from "./stockUpdate.interface";
export declare abstract class StockPort {
    abstract updateStocks(stocks: StockUpdateDTO[]): Promise<StockDTO[]>;
}
