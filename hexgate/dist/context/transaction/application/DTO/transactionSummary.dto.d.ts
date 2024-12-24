import { CostumerDTO } from "../../domain/Internal/costumer/constumerDTO.interface";
import { DeliveryDTO } from "../../domain/Internal/delivery/deliveryDTO.interface";
import { StockDTO } from "../../domain/Internal/stock/stockDTO.interface";
export interface TransactionSummary {
    uuid: string;
    total: number;
    dateCreated: number;
    dateChanged: number;
    status: string;
    productsList?: StockDTO[];
    userInfo?: CostumerDTO;
    deliveryInfo?: DeliveryDTO;
}
