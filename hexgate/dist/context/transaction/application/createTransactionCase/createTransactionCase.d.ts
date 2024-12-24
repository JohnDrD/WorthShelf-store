import { TransactionCreateDTO } from "../DTO/transactionCreate.dto";
import { TransactionRepository } from "../../domain/transaction.repository";
import { BaseResponse } from "../../../shared/interfaces/response.interface";
import { CostumerPort } from "../../domain/Internal/costumer/costumerPort.interface";
import { DeliveryPort } from "../../domain/Internal/delivery/deliveryPort.interface";
import { StockPort } from "../../domain/Internal/stock/stockPort.interface";
export declare class CreateTransaction {
    private readonly transactionRep;
    private readonly deliveryRep;
    private readonly costumerRep;
    private readonly stockRep;
    constructor(transactionRep: TransactionRepository, deliveryRep: DeliveryPort, costumerRep: CostumerPort, stockRep: StockPort);
    run(dto: TransactionCreateDTO): Promise<BaseResponse>;
}
