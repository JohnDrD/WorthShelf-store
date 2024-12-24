import { CostumerDTO } from "./constumerDTO.interface";
export declare abstract class CostumerPort {
    abstract getById(id: string): Promise<CostumerDTO>;
}
