import { DeliveryDTO } from "src/context/transaction/domain/Internal/delivery/deliveryDTO.interface";
export interface UpdateStatusDTO {
    id: string;
    status: string;
    deliveryParams?: DeliveryDTO;
}
