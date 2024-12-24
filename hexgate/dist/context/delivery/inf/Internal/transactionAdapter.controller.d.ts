import { TransactionDPort } from "../../domain/Internal/transactionPort.interface";
import { Delivery } from "../../domain/delivery.entity";
import { DeliveryCreateParams } from "../../domain/deliveryCreateParams.interface";
import { DeliveryCreateCase } from "../../application/CreateCase/DeliveryCreateCase";
export declare class TransactionDAdapter extends TransactionDPort {
    private createCase;
    constructor(createCase: DeliveryCreateCase);
    createDelivery(data: DeliveryCreateParams): Promise<Delivery>;
}
