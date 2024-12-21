import { Delivery } from "../delivery.entity";
import { DeliveryCreateParams } from "../deliveryCreateParams.interface";

export abstract class TransactionDPort{
    abstract createDelivery(data: DeliveryCreateParams): Promise<Delivery>
}