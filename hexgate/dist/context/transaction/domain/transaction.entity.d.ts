import { TransactionPrimVal } from "./transactionPrimVal.interface";
import { TransactionCreateParams } from "./transasctionCreateParams.interface";
export declare class Transaction {
    private attr;
    constructor(attr: TransactionPrimVal);
    static create(data: TransactionCreateParams): Transaction;
    toValue(): {
        uuid: string;
        total: number;
        dateCreated: number;
        dateChanged: number;
        productsList: {
            id: string;
            amount: number;
        }[];
        userId: string;
        deliveryId?: string;
        status: string;
        transactionID: string;
    };
}
