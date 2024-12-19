import { Controller, Get, Param, Query } from "@nestjs/common";
import { StockSerice } from "../../application/Stock.service";

@Controller("Stocks")
export class StocksController{

    constructor(private stockSerice: StockSerice){}
    @Get(":id")
    async getStockById(@Param() request:{id:string} ): Promise<any>{
       
        return await this.stockSerice.getStockById(request.id)
    }

    @Get("")
    async getStockspagination(@Query() request:{amount:string, lastId?:string} ): Promise<any[]>{
        return await this.stockSerice.getStocks(
            {
                amount: parseInt(request.amount),
                lastId:request.lastId
            }
        )
    }
}