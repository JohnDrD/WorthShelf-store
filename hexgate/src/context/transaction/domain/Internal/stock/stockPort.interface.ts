import { StockDTO } from "./stockDTO.interface";
import { StockUpdateDTO } from "./stockUpdate.interface";

export abstract class StockPort{
    abstract updateStocks(stocks: StockUpdateDTO[]): Promise<StockDTO[]>
}