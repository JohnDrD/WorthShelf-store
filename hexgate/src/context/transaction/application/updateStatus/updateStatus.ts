import { HttpStatus, Injectable } from "@nestjs/common";
import { TransactionRepository } from "../../domain/transaction.repository"
import { TransactionStatusDTO } from "../DTO/transactionStatus.dto";
import { TRANSACTION_MSG } from "../../constants/Transaction.contants"
import { GEENERIC_MSG } from "../../../shared/constants/general.contants"


@Injectable()
export class UpdateStatus{
    constructor(private readonly transactionRep: TransactionRepository){}

    async run(statusUpdate: TransactionStatusDTO): Promise<any>{
        try {
            const data= await this.transactionRep.updateStatus(statusUpdate.id,statusUpdate.status);
            return {code: HttpStatus.OK, message:TRANSACTION_MSG.TRANSACTION_UPDATED ,data: data}
        } catch (error) {
            return {code: HttpStatus.BAD_REQUEST, message:GEENERIC_MSG.ERROR}
        }
        
    }
    
}