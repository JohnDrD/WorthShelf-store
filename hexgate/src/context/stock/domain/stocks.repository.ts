import { UpdateStockDAO } from "./DAO/updateStock.dao";
import { Stock } from "./stock";
import { StockPrimValues } from "./stockPrimValues.interface";


export abstract class StockRepository{
    abstract getById(id:string): Promise<StockPrimValues | null>
    abstract getStocks(amount:number, lastId?:string): Promise<StockPrimValues[]>
    //abstract updateStock(changes: UpdateStockDAO[]);
}