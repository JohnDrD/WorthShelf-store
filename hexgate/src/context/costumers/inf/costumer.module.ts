import { Module } from "@nestjs/common";
import { CostumerByIdCase } from "../application/costumerById/costumerByIdCase";
import { CostumerLoginCase } from "../application/login/costumerLoginCase";
import { CostumerGetByIdController } from "./Http/getByIdHttp/getByIdCostumer.controller";
import { LoginController } from "./Http/loginHttp/login.controller";
import { CostumerDB } from "./repositories/CostumerDynamo.db";
import { CostumerRepository } from "../domain/costumer.repository";
import { SharedModule } from "src/context/shared/inf/shared.module";
import { TransactionPort } from "../domain/Internal/transaction/TransactionPort.interface";
import { TransactionAdapter } from "./Internal/transaction/transactionadapter.controller";

@Module({
    providers:[
        CostumerByIdCase,
        CostumerLoginCase,
        CostumerDB,
        {
            provide: CostumerRepository,
            useExisting: CostumerDB
        },
        {
            provide: TransactionPort,
            useClass: TransactionAdapter
        }
    ],
    controllers:[CostumerGetByIdController, LoginController],
    exports:[TransactionPort],
    imports:[SharedModule]
})
export class CostumerModule{}