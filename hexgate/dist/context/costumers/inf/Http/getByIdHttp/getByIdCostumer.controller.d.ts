import { CostumerByIdCase } from '../../../application/costumerById/costumerByIdCase';
export declare class CostumerGetByIdController {
    private readonly getByIdCase;
    constructor(getByIdCase: CostumerByIdCase);
    run(request: {
        id: string;
    }): Promise<{
        code: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        code: import("@nestjs/common").HttpStatus;
        message: string;
        data: import("../../../domain/costumer.entity").Costumer;
    }>;
}
