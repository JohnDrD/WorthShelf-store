export interface TransactionSummary{
    uuid:string;
    total: number
    dateCreated: number;
    dateChanged:number;
    productsList: {id:string, amount:number}[];
    status:string
    
    userInfo?:string;
    deliveryInfo?:string;
}