import { HttpStatus, Injectable } from "@nestjs/common";
import { TransactionRepository } from "../../domain/transaction.repository"
import { GEENERIC_MSG } from "../../../shared/constants/general.contants"
import { BaseResponse } from "../../../shared/interfaces/response.interface";
import { TRANSACTION_MSG } from "../../constants/Transaction.contants"

@Injectable()
export class GetByIdCase{
    constructor( readonly transactionRep: TransactionRepository){}

    async run(id:string): Promise<BaseResponse>{
        try {
            const data= await this.transactionRep.getById(id);

            if(data!=null){
                return {code: HttpStatus.FOUND, message:TRANSACTION_MSG.TRANSACTION_FOUND, data:data}
            }
            return {code: HttpStatus.NOT_FOUND, message:TRANSACTION_MSG.TRANSACTION_NOT_FOUD}
        } catch (error) {
            return {code: HttpStatus.BAD_REQUEST, message:GEENERIC_MSG.ERROR}
        }
    }
    
}