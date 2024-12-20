export interface TransactionPrimVal{
    total: number
    status:string
    uuid:string
    userId:string
    transactionID?:string
    deliveryId?:string;
    dateCreated?: number;
    dateChanged?:number;
}