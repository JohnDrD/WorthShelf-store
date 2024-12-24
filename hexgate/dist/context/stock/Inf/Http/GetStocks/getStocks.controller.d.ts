import { BaseResponse } from '../../../../shared/interfaces/response.interface';
import { GetStocksCase } from '../../../application/getStocks/GetStocksCase';
export declare class GetStocksController {
    private getStocks;
    constructor(getStocks: GetStocksCase);
    getStockspagination(request: {
        amount: string;
        lastId?: string;
    }): Promise<BaseResponse>;
}
