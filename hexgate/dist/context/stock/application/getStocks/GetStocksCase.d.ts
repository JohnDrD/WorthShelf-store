import { HttpStatus } from "@nestjs/common";
import { StockRepository } from "../../domain/stocks.repository";
export declare class GetStocksCase {
    readonly stockrep: StockRepository;
    constructor(stockrep: StockRepository);
    execute(amount: number, lastId?: string): Promise<{
        code: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        code: HttpStatus;
        message: string;
        data: import("../../domain/stockPrimValues.interface").StockPrimValues[];
    }>;
}
