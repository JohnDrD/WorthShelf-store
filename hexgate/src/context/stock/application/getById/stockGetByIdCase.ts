import { HttpStatus, Injectable } from "@nestjs/common";
import { StockRepository } from "../../domain/stocks.repository";
import { STOCK_MSG } from "../../constants/stock.contants";
import { GEENERIC_MSG } from '../../../shared/constants/general.contants'

@Injectable()
export class GetStockByIdCase{
    constructor(readonly stockrep: StockRepository){}
    async execute(id: string){
        try {
            const data= await this.stockrep.getById(id)
            if(data==null){
                return  {code:HttpStatus.NOT_FOUND, message:STOCK_MSG.NOT_FOUND}
            }
            return  {code:HttpStatus.FOUND, message:STOCK_MSG.FOUND, data: data}
        } catch (error) {
                         return {code:HttpStatus.BAD_REQUEST, message:GEENERIC_MSG.ERROR}
        }
        
    }
}
