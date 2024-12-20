import { CostumerDTO } from "./constumerDTO.interface";

export abstract class CostumerPort{
    abstract getById(id:string):Promise<CostumerDTO>;
}