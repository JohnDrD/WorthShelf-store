import { Injectable } from "@nestjs/common";
import { TransactionRepository } from "../../../domain/transaction.repository"
import { TransactionPrimVal } from "../../../domain/transactionPrimVal.interface";
import { TransactionModel } from "./TransactionDynamo.schema";
import { Transaction } from "../../../domain/transaction.entity";

@Injectable()
export class TransactionDB extends TransactionRepository{
    
   async getById(id: string): Promise<TransactionPrimVal | null> {
      return  await TransactionModel.get(id)
    }
   async updateStatus(id:string, status:string): Promise<TransactionPrimVal> {
        const obj= await TransactionModel.get(id);
        obj.status=status
        obj.save()
        return obj
    }
    async createTransaction(transaction:Transaction): Promise<TransactionPrimVal> {
        const data= await TransactionModel.create(transaction.toValue());
        return data;
    }

    
}