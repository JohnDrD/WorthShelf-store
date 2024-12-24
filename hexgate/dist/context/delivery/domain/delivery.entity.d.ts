import { DeliveryCreateParams } from "./deliveryCreateParams.interface";
import { DeliveryPrimVal } from "./deliveryPrimVal.interface";
export declare class Delivery {
    private attr;
    constructor(attr: DeliveryPrimVal);
    static create(data: DeliveryCreateParams): Delivery;
    toValue(): DeliveryPrimVal;
}
