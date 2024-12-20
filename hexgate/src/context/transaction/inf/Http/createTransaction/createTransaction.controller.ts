import { Body, Controller, Post } from "@nestjs/common";
import { CreateTransaction } from "../../../application/createTransactionCase/createTransactionCase"
import { ROUTE } from "../../../constants/Transaction.contants"
import { TransactionCreateDTO } from "../DTO/createTransaction.dto";

@Controller(ROUTE)
export class TransactionCreateController{
    constructor(private readonly createCase: CreateTransaction){}
    @Post("")
    async run(@Body() request: TransactionCreateDTO){
        return this.createCase.run(request);
        
    }
}