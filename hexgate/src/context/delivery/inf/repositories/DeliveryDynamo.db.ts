import { Injectable } from "@nestjs/common";
import { DeliveryRepository } from "../../domain/delivery.repository";
import { Delivery } from "../../domain/delivery.entity";
import { DeliveryCreateParams } from "../../domain/deliveryCreateParams.interface";
import { DeliveryModel } from "./DeliveryDyname.schema";


@Injectable()
export class DeliveryDB extends DeliveryRepository{
   async getById(id: string): Promise<Delivery | null> {
        return Delivery.create(await DeliveryModel.get(id));
    }
   async create(params: DeliveryCreateParams): Promise<Delivery> {
       const data= await DeliveryModel.create(params);
       return  Delivery.create(data);
    }

}