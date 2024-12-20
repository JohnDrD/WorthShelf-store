import { randomUUID } from "node:crypto";
import { DeliveryCreateParams } from "./deliveryCreateParams.interface";
import { DeliveryPrimVal } from "./deliveryPrimVal.interface";

export class Delivery{
    constructor(private attr: DeliveryPrimVal){}

    static create(data: DeliveryCreateParams){
        return new Delivery({...data,
            uuid: data.uuid?? randomUUID()
        })
    }

    toValue(){
        return this.attr
    }
}