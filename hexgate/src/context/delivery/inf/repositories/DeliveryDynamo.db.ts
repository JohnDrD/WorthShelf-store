import { Injectable } from "@nestjs/common";
import { DeliveryRepository } from "../../domain/delivery.repository";
import { Delivery } from "../../domain/delivery.entity";
import { DeliveryCreateParams } from "../../domain/deliveryCreateParams.interface";
import { DeliveryModel } from "./DeliveryDyname.schema";
import { randomUUID } from "node:crypto";


@Injectable()
export class DeliveryDB extends DeliveryRepository{
   async getById(id: string): Promise<Delivery | null> {
        return Delivery.create(await DeliveryModel.get(id));
    }
   async create(params: DeliveryCreateParams): Promise<Delivery> {
    const dataa = randomUUID()
       const data= await DeliveryModel.create({...params,uuid:dataa});
       return  Delivery.create(data);
    }

}