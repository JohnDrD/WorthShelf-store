import { TransactionAdapter } from "src/context/costumers/inf/Internal/transaction/transactionadapter.controller";
import { CostumerDTO } from "src/context/transaction/domain/Internal/costumer/constumerDTO.interface";
import { CostumerPort } from "src/context/transaction/domain/Internal/costumer/costumerPort.interface";

export class CostumerAdapter extends CostumerPort{
    constructor(private costumerPort: TransactionAdapter){
        super();
    }
    getById(id: string): Promise<CostumerDTO> {
        return this.costumerPort.getById(id);
    }
    
}