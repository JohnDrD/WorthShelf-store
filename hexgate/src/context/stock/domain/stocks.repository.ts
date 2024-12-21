import { StockPrimValues } from "./stockPrimValues.interface";


export abstract class StockRepository{
    abstract getById(id:string): Promise<StockPrimValues | null>
    abstract getStocks(amount:number, lastId?:string): Promise<StockPrimValues[]>
    abstract updateStock(id:string, data:StockPrimValues): Promise<StockPrimValues>;
    abstract getBatch(ids:string[]): Promise<StockPrimValues[]>
}