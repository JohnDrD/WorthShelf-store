import { DeliveryRepository } from "../../domain/delivery.repository";
export declare class DeliveryGetByIdCase {
    private readonly deliveryRep;
    constructor(deliveryRep: DeliveryRepository);
    execute(id: string): Promise<import("../../domain/delivery.entity").Delivery>;
}
