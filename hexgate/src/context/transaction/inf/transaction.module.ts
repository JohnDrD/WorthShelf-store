import { Module } from "@nestjs/common";
import { TransactionUpdateStatusController } from "./Http/updateStatusTransaction/updateStatusTransactioncontroller";
import { TransactionGetByIdController } from "./Http/getByIdTransaction/getByIdTransactioncontroller";
import { CreateTransaction } from "../application/createTransactionCase/createTransactionCase"//"../application/createTransaction/createTransaction";
import { GetByIdCase } from "../application/getByIdCase/getByIdCase";
import { UpdateStatus } from "../application/updateStatus/updateStatus";
import { TransactionDB } from "./repositories/DynamoDB/TransactionDynamo.db";
import { TransactionCreateController } from "./Http/createTransaction/createTransaction.controller";
import { TransactionRepository } from "../domain/transaction.repository"
import { DynamoConnection } from "src/context/shared/DynamoDB/inf/DynamoDBConnection.db";

@Module({
    controllers: [TransactionUpdateStatusController, TransactionGetByIdController,TransactionCreateController],
    providers: [
      CreateTransaction,
      GetByIdCase,
      UpdateStatus,
      TransactionDB,
      {
        provide: TransactionRepository,
        useExisting: TransactionDB,
      },
      DynamoConnection
    ],
    exports: [ CreateTransaction,
        GetByIdCase,
        UpdateStatus],
  })
  export class TransactionModule {}