import { DeliveryRepository } from "../../domain/delivery.repository";
import { Delivery } from "../../domain/delivery.entity";
import { DeliveryCreateParams } from "../../domain/deliveryCreateParams.interface";
export declare class DeliveryDB extends DeliveryRepository {
    getById(id: string): Promise<Delivery | null>;
    create(params: DeliveryCreateParams): Promise<Delivery>;
}
