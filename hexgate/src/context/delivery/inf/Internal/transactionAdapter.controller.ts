import { Injectable } from "@nestjs/common";
import { TransactionPort } from "../../domain/Internal/transactionPort.interface";
import { Delivery } from "../../domain/delivery.entity";
import { DeliveryCreateParams } from "../../domain/deliveryCreateParams.interface";
import { DeliveryCreateCase } from "../../application/CreateCase/DeliveryCreateCase";

@Injectable()
export class TransactionAdapter extends TransactionPort{
    constructor(private createCase:DeliveryCreateCase){
        super();
    }
    createDelivery(data: DeliveryCreateParams): Promise<Delivery> {
        return this.createCase.execute(data)
    }

}