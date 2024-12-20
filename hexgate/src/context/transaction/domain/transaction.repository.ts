import { Transaction } from "./transaction.entity";
import { TransactionPrimVal } from "./transactionPrimVal.interface";

export abstract class TransactionRepository{
    abstract getById(id:string): Promise<TransactionPrimVal | null>;
    abstract updateStatus(id:string, status:string): Promise<TransactionPrimVal>;
    abstract createTransaction(transaction:Transaction): Promise<TransactionPrimVal>
}