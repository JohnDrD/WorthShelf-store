import { CostumerDTO } from "./constumerDTO.interface";

export abstract class TransactionPort{
    abstract getById(id:string):Promise<CostumerDTO>;
}