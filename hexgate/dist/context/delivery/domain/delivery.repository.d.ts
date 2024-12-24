import { Delivery } from "./delivery.entity";
import { DeliveryCreateParams } from "./deliveryCreateParams.interface";
export declare abstract class DeliveryRepository {
    abstract getById(id: string): Promise<Delivery | null>;
    abstract create(params: DeliveryCreateParams): Promise<Delivery>;
}
