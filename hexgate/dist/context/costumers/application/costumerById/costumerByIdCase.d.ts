import { HttpStatus } from "@nestjs/common";
import { CostumerRepository } from "../../domain/costumer.repository";
export declare class CostumerByIdCase {
    private readonly costumerRep;
    constructor(costumerRep: CostumerRepository);
    execute(id: string): Promise<{
        code: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        code: HttpStatus;
        message: string;
        data: import("../../domain/costumer.entity").Costumer;
    }>;
}
