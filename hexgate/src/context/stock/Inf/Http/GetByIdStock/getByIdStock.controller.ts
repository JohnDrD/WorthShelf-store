import { Controller, Get, Param } from "@nestjs/common"
import { GetStockByIdCase } from '../../../application/getById/stockGetByIdCase'
import { ROUTE } from '../../../constants/stock.contants'

@Controller(ROUTE)
export class GetStockByIdController{

    constructor(private getById: GetStockByIdCase){}
    @Get(":id")
    async getStockById(@Param() request:{id:string} ): Promise<any>{
       
        return await this.getById.execute(request.id)
    }
}