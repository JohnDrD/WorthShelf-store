import { Injectable } from "@nestjs/common";
import { TransactionDPort } from '../../../../delivery/domain/Internal/transactionPort.interface'
import { DeliveryDTO } from '../../../domain/Internal/delivery/deliveryDTO.interface'
import { DeliveryPort } from "../../../domain/Internal/delivery/deliveryPort.interface";
@Injectable()
export class DeliveryAdapter extends DeliveryPort{
    constructor(private readonly transactionPort: TransactionDPort){
        super();
    }
    async createDelivery(data: DeliveryDTO): Promise<DeliveryDTO> {
        return (await this.transactionPort.createDelivery(data))?.toValue();
    }
    
}