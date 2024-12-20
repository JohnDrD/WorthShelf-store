import { Injectable } from "@nestjs/common";
import { DeliveryRepository } from "../../domain/delivery.repository";

@Injectable()
export class DeliveryGetByIdCase{
    constructor(private readonly deliveryRep: DeliveryRepository){}

    async execute(id:string){
        return this.deliveryRep.getById(id)
    }
}