import { Module } from "@nestjs/common";
import { DynamoConnection } from "src/context/shared/inf/DynamoDBConnection.db";
import { DeliveryRepository } from "../domain/delivery.repository";
import { DeliveryDB } from "./repositories/DeliveryDynamo.db";
import { DeliveryCreateCase } from "../application/CreateCase/DeliveryCreateCase";
import { DeliveryGetByIdCase } from "../application/GetByIdCase/DeliveryGetByIdCase";

@Module({
    providers:[
        DynamoConnection,
        DeliveryDB,
        DeliveryCreateCase,
        DeliveryGetByIdCase,
        {
            provide: DeliveryRepository,
            useExisting: DeliveryDB
        }
    ],
    controllers:[],
    exports:[DeliveryGetByIdCase,DeliveryCreateCase]
})
export class DeliveryModule{}