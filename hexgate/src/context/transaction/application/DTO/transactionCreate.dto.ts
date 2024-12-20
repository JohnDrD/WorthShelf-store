

export interface TransactionCreateDTO{
    total: number
    productsList: {id:string, amount:number}[];
    userId:string;
}
