import { HttpStatus } from "@nestjs/common";
import { StockRepository } from "../../domain/stocks.repository";
export declare class GetStockByIdCase {
    readonly stockrep: StockRepository;
    constructor(stockrep: StockRepository);
    execute(id: string): Promise<{
        code: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        code: HttpStatus;
        message: string;
        data: import("../../domain/stockPrimValues.interface").StockPrimValues;
    }>;
}
