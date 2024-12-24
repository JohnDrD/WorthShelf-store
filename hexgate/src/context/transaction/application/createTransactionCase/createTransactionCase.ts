import { HttpStatus, Injectable } from "@nestjs/common";
import { TransactionCreateDTO } from "../DTO/transactionCreate.dto";
import { Transaction } from "../../domain/transaction.entity";
import { TransactionRepository } from "../../domain/transaction.repository";
import { BaseResponse } from "../../../shared/interfaces/response.interface";
import { TRANSACTION_MSG } from "../../constants/Transaction.contants";
import { GEENERIC_MSG } from "../../../shared/constants/general.contants";
import { TransactionSummary } from "../DTO/transactionSummary.dto";
import { CostumerPort } from "../../domain/Internal/costumer/costumerPort.interface";
import { DeliveryPort } from "../../domain/Internal/delivery/deliveryPort.interface";
import { StockPort } from "../../domain/Internal/stock/stockPort.interface";

@Injectable()
export class CreateTransaction{
    constructor(    
        private readonly transactionRep: TransactionRepository,
        private readonly deliveryRep: DeliveryPort,
        private readonly costumerRep: CostumerPort,
        private readonly stockRep: StockPort){}

    async run(dto:TransactionCreateDTO): Promise<BaseResponse> {
        try {
            const updateStocks= await this.stockRep.updateStocks(dto.productsList);
                    if(updateStocks.length==0){
                        return {code: HttpStatus.BAD_REQUEST, message:GEENERIC_MSG.ERROR}
                    }
            const delivery = await this.deliveryRep.createDelivery(
                        dto.deliveryParams,
                    );    
           const costumer= await this.costumerRep.getById(dto.userId);

            const  data= Transaction.create({...dto,deliveryId: delivery.uuid})
           const result= await this.transactionRep.createTransaction(data);

           const responseData: TransactionSummary = {
            ...result,
            productsList: updateStocks,
            deliveryInfo:delivery,
            userInfo:costumer
        };

           return {code: HttpStatus.OK, message:TRANSACTION_MSG.CREATED, data:responseData}
        } catch (error) {
            console.log("error: ", error)
            return {code: HttpStatus.BAD_REQUEST, message:GEENERIC_MSG.ERROR}
        }
    }
    
}