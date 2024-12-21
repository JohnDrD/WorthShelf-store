import { Controller, Get, Param } from "@nestjs/common"
import { GetStockByIdCase } from "src/context/stock/application/getById/stockGetByIdCase"
import { ROUTE } from "src/context/stock/constants/stock.constants"

@Controller(ROUTE)
export class GetStockByIdController{

    constructor(private getById: GetStockByIdCase){}
    @Get(":id")
    async getStockById(@Param() request:{id:string} ): Promise<any>{
       
        return await this.getById.execute(request.id)
    }
}