import { Injectable } from "@nestjs/common";
import { TransactionPort } from "src/context/costumers/domain/Internal/transaction/TransactionPort.interface";
import { CostumerDTO } from "src/context/transaction/domain/Internal/costumer/constumerDTO.interface";
import { CostumerPort } from "src/context/transaction/domain/Internal/costumer/costumerPort.interface";
@Injectable()
export class CostumerAdapter extends CostumerPort{
    constructor(private readonly costumerPort: TransactionPort){
        super();
    }
    getById(id: string): Promise<CostumerDTO> {
        return this.costumerPort.getById(id);
    }
    
}