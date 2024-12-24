import { TransactionRepository } from "../../../domain/transaction.repository";
import { TransactionPrimVal } from "../../../domain/transactionPrimVal.interface";
import { Transaction } from "../../../domain/transaction.entity";
export declare class TransactionDB extends TransactionRepository {
    getById(id: string): Promise<TransactionPrimVal | null>;
    updateStatus(id: string, data: TransactionPrimVal): Promise<TransactionPrimVal>;
    createTransaction(transaction: Transaction): Promise<TransactionPrimVal>;
}
