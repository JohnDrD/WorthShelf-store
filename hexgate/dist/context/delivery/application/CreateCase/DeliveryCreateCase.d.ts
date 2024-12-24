import { DeliveryRepository } from "../../domain/delivery.repository";
import { DeliveryDTO } from "../DTO/deliveryDTO.interface";
export declare class DeliveryCreateCase {
    private readonly deliveryRep;
    constructor(deliveryRep: DeliveryRepository);
    execute(data: DeliveryDTO): Promise<import("../../domain/delivery.entity").Delivery>;
}
