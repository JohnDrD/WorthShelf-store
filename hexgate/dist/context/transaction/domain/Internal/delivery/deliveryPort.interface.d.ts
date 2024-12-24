import { DeliveryDTO } from "./deliveryDTO.interface";
export declare abstract class DeliveryPort {
    abstract createDelivery(data: DeliveryDTO): Promise<DeliveryDTO>;
}
