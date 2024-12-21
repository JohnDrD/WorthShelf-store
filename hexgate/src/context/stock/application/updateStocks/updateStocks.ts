import { Injectable, HttpStatus } from "@nestjs/common"
import { GEENERIC_MSG } from "src/context/shared/constants/general.contants"
import { STOCK_MSG } from "../../constants/stock.constants"
import { StockRepository } from "../../domain/stocks.repository"
import { UpdateStockDTO } from "../DTO/updateStock.dto"

@Injectable()
export class UpdateStocks{
    constructor(private stockrep: StockRepository){}
    async execute(stocks: UpdateStockDTO[]){
        try {
            const updates=[]
            const ids= stocks.map(item=> item.id)
            const data= await this.stockrep.getBatch(ids);
            if(data.length!=stocks.length){
                return  {code:HttpStatus.NOT_FOUND, message:STOCK_MSG.NOT_FOUND}
            }
            let invalidStocks=false
            stocks.forEach(stock=>{

                if(!invalidStocks){

                    const stockData= data.find(item=>item.uuid==stock.id)
                    
                    if(stockData.stock<stock.amount){
                        invalidStocks=true
                        return;
                    }

                    stockData.stock= stockData.stock- stock.amount
                    delete stockData.uuid

                updates.push(this.stockrep.updateStock(stock.id,stockData))
                }
            })

            if(invalidStocks){
                return {code:HttpStatus.BAD_REQUEST, message:STOCK_MSG.INVALID_STOCK}
            }
            const  result =  await Promise.all(updates)
            return {code:HttpStatus.OK, message:STOCK_MSG.UPDATED, data: result}
            
        } catch (error) {
                         return {code:HttpStatus.BAD_REQUEST, message:GEENERIC_MSG.ERROR}
        }
        
    }
}