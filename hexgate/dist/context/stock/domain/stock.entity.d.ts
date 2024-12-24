import { StockPrimValues } from "./stockPrimValues.interface";
import { StockParams } from "./stockCreateParams.interface";
export declare class Stock {
    private attr;
    constructor(attr: StockPrimValues);
    static create(createStock: StockParams): Stock;
    toValue(): StockPrimValues;
}
