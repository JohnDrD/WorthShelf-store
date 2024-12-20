import { Delivery } from "../delivery.entity";
import { DeliveryCreateParams } from "../deliveryCreateParams.interface";

export abstract class TransactionPort{
    abstract createDelivery(data: DeliveryCreateParams): Promise<Delivery>
}