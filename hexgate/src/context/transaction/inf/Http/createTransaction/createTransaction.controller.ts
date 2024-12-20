import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreateTransaction } from "../../../application/createTransactionCase/createTransactionCase"
import { ROUTE } from "../../../constants/Transaction.contants"
import { TransactionCreateDTO } from "../DTO/createTransaction.dto";
import { JwtAuthGuard } from "src/context/shared/Guards/jwtGuard.guard";
//@UseGuards(JwtAuthGuard)
@Controller(ROUTE)
export class TransactionCreateController{
    constructor(private readonly createCase: CreateTransaction){}
    @Post("")
    async run(@Body() request: TransactionCreateDTO){
        return this.createCase.run(request);
        
    }
}