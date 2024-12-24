import { CostumerPort } from '../../../domain/Internal/costumer/costumerPort.interface';
import { CostumerDTO } from '../../../domain/Internal/costumer/constumerDTO.interface';
import { TransactionPort } from '../../../../costumers/domain/Internal/transaction/TransactionPort.interface';
export declare class CostumerAdapter extends CostumerPort {
    private readonly costumerPort;
    constructor(costumerPort: TransactionPort);
    getById(id: string): Promise<CostumerDTO>;
}
