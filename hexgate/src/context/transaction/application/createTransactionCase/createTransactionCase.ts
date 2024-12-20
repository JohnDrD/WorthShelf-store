import { HttpStatus, Injectable } from "@nestjs/common";
import { TransactionCreateDTO } from "../DTO/transactionCreate.dto";
import { Transaction } from "../../domain/transaction.entity";
import { TransactionRepository } from "../../domain/transaction.repository";
import { BaseResponse } from "../../../shared/interfaces/response.interface";
import { TRANSACTION_MSG, TRANSACTION_STATES } from "../../constants/Transaction.contants";
import { GEENERIC_MSG } from "../../../shared/constants/general.contants";

@Injectable()
export class CreateTransaction{
    constructor(private readonly transactionRep: TransactionRepository){}

    async run(dto:TransactionCreateDTO): Promise<BaseResponse> {
        try {
            const  data= Transaction.create({...dto,
                status:TRANSACTION_STATES.PENDING
            })
           const result= await this.transactionRep.createTransaction(data);
           return {code: HttpStatus.OK, message:TRANSACTION_MSG.CREATED, data:result}
        } catch (error) {
            return {code: HttpStatus.BAD_REQUEST, message:GEENERIC_MSG.ERROR}
        }
    }
    
}