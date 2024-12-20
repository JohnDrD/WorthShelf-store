import { Controller, Get, Param } from "@nestjs/common";
import { GetByIdCase } from "../../../application/getByIdCase/getByIdCase";
import { ROUTE } from "../../../constants/Transaction.contants";

@Controller(ROUTE)
export class TransactionGetByIdController{
    constructor(private readonly getByIdCase: GetByIdCase){}
    @Get("/:id")
    async run(@Param() request: {id:string}){
        return this.getByIdCase.run(request.id);
        
    }
}