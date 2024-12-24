import { CreateTransaction } from "../../../application/createTransactionCase/createTransactionCase";
import { TransactionCreateDTO } from "../DTO/createTransaction.dto";
export declare class TransactionCreateController {
    private readonly createCase;
    constructor(createCase: CreateTransaction);
    run(request: TransactionCreateDTO): Promise<import("../../../../shared/interfaces/response.interface").BaseResponse>;
}
