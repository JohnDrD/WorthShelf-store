import { Module } from "@nestjs/common";
import { DynamoConnection } from "src/context/shared/inf/DynamoDBConnection.db";
import { DeliveryRepository } from "../domain/delivery.repository";
import { DeliveryDB } from "./repositories/DeliveryDynamo.db";
import { DeliveryCreateCase } from "../application/CreateCase/DeliveryCreateCase";
import { DeliveryGetByIdCase } from "../application/GetByIdCase/DeliveryGetByIdCase";
import { TransactionAdapter } from "./Internal/transactionAdapter.controller";
import { TransactionPort } from "../domain/Internal/transactionPort.interface";

@Module({
    providers:[
        DynamoConnection,
        DeliveryDB,
        DeliveryCreateCase,
        DeliveryGetByIdCase,
        {
            provide: DeliveryRepository,
            useExisting: DeliveryDB
        },
        { provide: TransactionPort,
            useClass:TransactionAdapter
        }
    ],
    controllers:[],
    exports:[DeliveryGetByIdCase,DeliveryCreateCase,TransactionPort]
})
export class DeliveryModule{}