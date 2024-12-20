import { Module } from "@nestjs/common";
import { DynamoConnection } from "src/context/shared/DynamoDB/inf/DynamoDBConnection.db";
import { CostumerByIdCase } from "../application/costumerById/costumerByIdCase";
import { CostumerLoginCase } from "../application/login/costumerLoginCase";
import { CostumerGetByIdController } from "./Http/getByIdHttp/getByIdCostumer.controller";
import { LoginController } from "./Http/loginHttp/login.controller";
import { CostumerDB } from "./repositories/CostumerDynamo.db";
import { CostumerRepository } from "../domain/costumer.repository";

@Module({
    providers:[
        DynamoConnection,
        CostumerByIdCase,
        CostumerLoginCase,
        CostumerDB,
        {
            provide: CostumerRepository,
            useExisting: CostumerDB
        }
    ],
    controllers:[CostumerGetByIdController, LoginController],
    exports:[CostumerByIdCase]
})
export class CostumerModule{}