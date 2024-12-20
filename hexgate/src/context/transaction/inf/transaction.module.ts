import { Module } from "@nestjs/common";
import { TransactionUpdateStatusController } from "./Http/updateStatusTransaction/updateStatusTransactioncontroller";
import { TransactionGetByIdController } from "./Http/getByIdTransaction/getByIdTransactioncontroller";
import { CreateTransaction } from "../application/createTransactionCase/createTransactionCase"
import { GetByIdCase } from "../application/getByIdCase/getByIdCase";
import { UpdateStatus } from "../application/updateStatus/updateStatus";
import { TransactionDB } from "./repositories/DynamoDB/TransactionDynamo.db";
import { TransactionCreateController } from "./Http/createTransaction/createTransaction.controller";
import { TransactionRepository } from "../domain/transaction.repository"
import { DynamoConnection } from "src/context/shared/inf/DynamoDBConnection.db";
import { SharedModule } from "src/context/shared/inf/shared.module";
import { DeliveryModule } from "src/context/delivery/inf/delivery.module";

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
        imports:[SharedModule, DeliveryModule]
  })
  export class TransactionModule {}