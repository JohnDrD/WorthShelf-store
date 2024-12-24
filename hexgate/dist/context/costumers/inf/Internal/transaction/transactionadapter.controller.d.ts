import { CostumerByIdCase } from "../../../application/costumerById/costumerByIdCase";
import { CostumerDTO } from "../../../domain/Internal/transaction/constumerDTO.interface";
import { TransactionPort } from "../../../domain/Internal/transaction/TransactionPort.interface";
export declare class TransactionAdapter extends TransactionPort {
    private getByIdCase;
    constructor(getByIdCase: CostumerByIdCase);
    getById(id: string): Promise<CostumerDTO>;
}
