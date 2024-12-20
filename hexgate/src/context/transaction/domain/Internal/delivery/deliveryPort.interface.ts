import { DeliveryDTO } from "./deliveryDTO.interface";

export abstract class DeliveryPort{
    abstract createDelivery(data: DeliveryDTO): Promise<DeliveryDTO>
}