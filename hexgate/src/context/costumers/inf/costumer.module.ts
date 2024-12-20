import { Module } from "@nestjs/common";
import { CostumerByIdCase } from "../application/costumerById/costumerByIdCase";
import { CostumerLoginCase } from "../application/login/costumerLoginCase";
import { CostumerGetByIdController } from "./Http/getByIdHttp/getByIdCostumer.controller";
import { LoginController } from "./Http/loginHttp/login.controller";
import { CostumerDB } from "./repositories/CostumerDynamo.db";
import { CostumerRepository } from "../domain/costumer.repository";
import { SharedModule } from "src/context/shared/inf/shared.module";

@Module({
    providers:[
        CostumerByIdCase,
        CostumerLoginCase,
        CostumerDB,
        {
            provide: CostumerRepository,
            useExisting: CostumerDB
        },
    ],
    controllers:[CostumerGetByIdController, LoginController],
    exports:[CostumerByIdCase],
    imports:[SharedModule]
})
export class CostumerModule{}