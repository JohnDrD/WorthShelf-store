import { TransactionDPort } from '../../../../delivery/domain/Internal/transactionPort.interface';
import { DeliveryDTO } from '../../../domain/Internal/delivery/deliveryDTO.interface';
import { DeliveryPort } from "../../../domain/Internal/delivery/deliveryPort.interface";
export declare class DeliveryAdapter extends DeliveryPort {
    private readonly transactionPort;
    constructor(transactionPort: TransactionDPort);
    createDelivery(data: DeliveryDTO): Promise<DeliveryDTO>;
}
