import { TransactionRepository } from "../../domain/transaction.repository";
import { BaseResponse } from "../../../shared/interfaces/response.interface";
export declare class GetByIdCase {
    readonly transactionRep: TransactionRepository;
    constructor(transactionRep: TransactionRepository);
    run(id: string): Promise<BaseResponse>;
}
