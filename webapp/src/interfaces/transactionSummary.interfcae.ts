import { ProductCardParams } from "../components/ProductCard/ProductCard.interface";
import { DeliveryDTO } from "./delivery.interface";
import { User } from "./user.interface";

export interface TransactionSummary{
    uuid:string;
    total: number
    dateCreated: number;
    dateChanged:number;
    status:string
    
    productsList?: ProductCardParams[];
    userInfo?:User;
    deliveryInfo?:DeliveryDTO;
}