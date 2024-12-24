import { CostumerDTO } from "./constumerDTO.interface";
export declare abstract class TransactionPort {
    abstract getById(id: string): Promise<CostumerDTO>;
}
