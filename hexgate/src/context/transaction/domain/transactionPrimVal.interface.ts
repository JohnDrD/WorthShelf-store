export interface TransactionPrimVal{
    uuid:string;
    total: number
    dateCreated: number;
    dateChanged:number;
    productsList: {id:string, amount:number}[];
    userId:string;
    deliveryId?:string;
    status:string
    transactionID:string
}