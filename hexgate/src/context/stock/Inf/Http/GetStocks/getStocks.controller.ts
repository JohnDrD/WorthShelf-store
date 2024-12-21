import { Controller, Get, Query } from "@nestjs/common"
import { BaseResponse } from "src/context/shared/interfaces/response.interface"
import { GetStocksCase } from "src/context/stock/application/getStocks/GetStocksCase"
import { ROUTE } from "src/context/stock/constants/stock.constants"

@Controller(ROUTE)
export class GetStocksController{

    constructor(private getStocks: GetStocksCase){}
    @Get("")
    async getStockspagination(@Query() request:{amount:string, lastId?:string} ): Promise<BaseResponse>{
        return await this.getStocks.execute(
            parseInt(request.amount),
            request.lastId
        )
    }
}