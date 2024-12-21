import { Injectable } from "@nestjs/common";
import { TransactionDPort } from "../../domain/Internal/transactionPort.interface";
import { Delivery } from "../../domain/delivery.entity";
import { DeliveryCreateParams } from "../../domain/deliveryCreateParams.interface";
import { DeliveryCreateCase } from "../../application/CreateCase/DeliveryCreateCase";

@Injectable()
export class TransactionDAdapter extends TransactionDPort{
    constructor(private createCase:DeliveryCreateCase){
        super();
    }
   async createDelivery(data: DeliveryCreateParams): Promise<Delivery> {
        return await this.createCase.execute(data)
    }

}