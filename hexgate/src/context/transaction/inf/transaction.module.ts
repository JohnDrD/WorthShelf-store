import { Module } from "@nestjs/common";
import { TransactionUpdateStatusController } from "./Http/updateStatusTransaction/updateStatusTransactioncontroller";
import { TransactionGetByIdController } from "./Http/getByIdTransaction/getByIdTransactioncontroller";
import { CreateTransaction } from "../application/createTransactionCase/createTransactionCase"
import { GetByIdCase } from "../application/getByIdCase/getByIdCase";
import { UpdateStatus } from "../application/updateStatus/updateStatus";
import { TransactionDB } from "./repositories/DynamoDB/TransactionDynamo.db";
import { TransactionCreateController } from "./Http/createTransaction/createTransaction.controller";
import { TransactionRepository } from "../domain/transaction.repository"
import { SharedModule } from "src/context/shared/inf/shared.module";
import { DeliveryModule } from "src/context/delivery/inf/delivery.module";
import { DeliveryPort } from "../domain/Internal/delivery/deliveryPort.interface";
import { DeliveryAdapter } from "./Internal/delivery/deliveryAdapter.controller";
import { CostumerModule } from "src/context/costumers/inf/costumer.module";
import { CostumerPort } from "../domain/Internal/costumer/costumerPort.interface";
import { CostumerAdapter } from "./Internal/costumer/costumerAdapter.controller";

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
      {provide:DeliveryPort,
        useClass: DeliveryAdapter
       },
       {
        provide: CostumerPort,
        useClass: CostumerAdapter
       }
    ],
    exports: [ CreateTransaction,
        GetByIdCase,
        UpdateStatus],
        
        imports:[SharedModule, DeliveryModule, CostumerModule]
  })
  export class TransactionModule {}