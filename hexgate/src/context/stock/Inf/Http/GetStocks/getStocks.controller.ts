import { Controller, Get, Query } from "@nestjs/common"
import { BaseResponse } from '../../../../shared/interfaces/response.interface'
import { GetStocksCase } from '../../../application/getStocks/GetStocksCase'
import { ROUTE } from '../../../constants/stock.contants'

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