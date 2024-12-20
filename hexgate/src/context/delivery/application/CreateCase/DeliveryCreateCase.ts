import { Injectable } from "@nestjs/common";
import { DeliveryRepository } from "../../domain/delivery.repository";
import { DeliveryDTO } from "../DTO/deliveryDTO.interface";

@Injectable()
export class DeliveryCreateCase{
    constructor(private readonly deliveryRep: DeliveryRepository){}

    async execute(data:DeliveryDTO){
        return this.deliveryRep.create(data)
    }
}