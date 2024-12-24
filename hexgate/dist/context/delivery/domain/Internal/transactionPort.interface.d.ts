import { Delivery } from "../delivery.entity";
import { DeliveryCreateParams } from "../deliveryCreateParams.interface";
export declare abstract class TransactionDPort {
    abstract createDelivery(data: DeliveryCreateParams): Promise<Delivery>;
}
