export interface TransactionCreateParams{
        total: number,
        status:string,
        userId:string,
        uuid?:string,
    transactionID?:string,
    deliveryId?:string,
    dateCreated?: number,
    dateChanged?:number
    productsList: {id:string, amount:number}[];}