import { HttpStatus, Injectable } from "@nestjs/common";
import { StockRepository } from "../../domain/stocks.repository";
import { STOCK_MSG } from "../../constants/stock.constants";
import { GEENERIC_MSG } from "src/context/shared/constants/general.contants";

@Injectable()
export class GetStocksCase{
    constructor(private stockrep: StockRepository){}
    async execute(amount:number, lastId?:string){
        try {
            const data= await this.stockrep.getStocks(amount,lastId)
            if(data.length==0){
                return  {code:HttpStatus.NOT_FOUND, message:STOCK_MSG.BOTTOM}
            }
            return  {code:HttpStatus.FOUND, message:STOCK_MSG.PAGINATION, data: data}
        } catch (error) {
                         return {code:HttpStatus.BAD_REQUEST, message:GEENERIC_MSG.ERROR}
        }
        
    }
}