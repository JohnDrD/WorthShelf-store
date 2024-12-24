export interface DeliveryDTO {
    uuid?: string;
    postCode: string;
    country: string;
    city: string;
    address: string;
    status: string;
    dateCreated?: number;
    dateSend?: number;
    dateFinish?: number;
    transactionId: string;
}
