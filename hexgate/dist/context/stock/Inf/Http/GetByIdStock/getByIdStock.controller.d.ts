import { GetStockByIdCase } from '../../../application/getById/stockGetByIdCase';
export declare class GetStockByIdController {
    private getById;
    constructor(getById: GetStockByIdCase);
    getStockById(request: {
        id: string;
    }): Promise<any>;
}
