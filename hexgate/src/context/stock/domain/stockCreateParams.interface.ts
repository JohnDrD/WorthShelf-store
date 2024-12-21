export interface StockParams{
    uuid?:string;
    name:string;
    unitValue:number;
    stock: number;
    description: string;
    images: string[];
    dateCreated?:number;
}