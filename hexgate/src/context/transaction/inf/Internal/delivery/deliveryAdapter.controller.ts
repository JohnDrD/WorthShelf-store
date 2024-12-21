import { Injectable } from "@nestjs/common";
import { TransactionDPort } from "src/context/delivery/domain/Internal/transactionPort.interface";
import { DeliveryDTO } from "src/context/transaction/domain/Internal/delivery/deliveryDTO.interface";
import { DeliveryPort } from "src/context/transaction/domain/Internal/delivery/deliveryPort.interface";
@Injectable()
export class DeliveryAdapter extends DeliveryPort{
    constructor(private readonly transactionPort: TransactionDPort){
        super();
    }
    async createDelivery(data: DeliveryDTO): Promise<DeliveryDTO> {
        return (await this.transactionPort.createDelivery(data)).toValue();
    }
    
}