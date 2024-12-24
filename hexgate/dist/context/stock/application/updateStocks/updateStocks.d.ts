import { HttpStatus } from "@nestjs/common";
import { StockRepository } from "../../domain/stocks.repository";
import { UpdateStockDTO } from "../DTO/updateStock.dto";
export declare class UpdateStocks {
    readonly stockrep: StockRepository;
    constructor(stockrep: StockRepository);
    execute(stocks: UpdateStockDTO[]): Promise<{
        code: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        code: HttpStatus;
        message: string;
        data: any[];
    }>;
}
