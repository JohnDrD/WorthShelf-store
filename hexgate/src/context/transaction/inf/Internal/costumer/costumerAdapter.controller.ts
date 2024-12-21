import { Injectable } from "@nestjs/common";
import { CostumerPort } from '../../../domain/Internal/costumer/costumerPort.interface'
import { CostumerDTO } from '../../../domain/Internal/costumer/constumerDTO.interface'
import { TransactionPort } from '../../../../costumers/domain/Internal/transaction/TransactionPort.interface'
@Injectable()
export class CostumerAdapter extends CostumerPort{
    constructor(private readonly costumerPort: TransactionPort){
        super();
    }
    getById(id: string): Promise<CostumerDTO> {
        return this.costumerPort.getById(id);
    }
    
}