import { HttpStatus } from "@nestjs/common";
import { TestingModule, Test } from "@nestjs/testing";
import { GEENERIC_MSG } from '../../../shared/constants/general.contants'
import { STOCK_MSG } from "../../constants/stock.contants";
import { StockRepository } from "../../domain/stocks.repository";
import { GetStocksCase } from "./GetStocksCase";
import { STOCKS_REPOSITORY_MOCK } from '../../../../../test/unitMocks/stock.mock'


describe('GetStocksCase', () => {
    let getStocksCase: GetStocksCase;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [
                GetStocksCase,
                {
                    provide: StockRepository,
                    useValue: STOCKS_REPOSITORY_MOCK,
                },
            ],
        }).compile();

        getStocksCase = app.get<GetStocksCase>(GetStocksCase);
    });

    it('should return FOUND when stocks are found', async () => {
        const mockStocks = [{ id: '1', name: 'Stock A', quantity: 10 }, { id: '1', name: 'Stock B', quantity: 20 }];
        

        const result = await getStocksCase.execute(2);

        expect(result.code).toBe(HttpStatus.FOUND);
        expect(result.message).toBe(STOCK_MSG.PAGINATION);
    });

    it('should return NOT_FOUND when no stocks are found', async () => {
        jest.spyOn(getStocksCase.stockrep, 'getStocks').mockResolvedValue([]);

        const result = await getStocksCase.execute(2);

        expect(result.code).toBe(HttpStatus.NOT_FOUND);
        expect(result.message).toBe(STOCK_MSG.BOTTOM);
        expect(result.data).toBeUndefined();
    });

    it('should return BAD_REQUEST on error', async () => {
        jest.spyOn(getStocksCase.stockrep, 'getStocks').mockRejectedValue(new Error('Database error'));

        const result = await getStocksCase.execute(2);

        expect(result.code).toBe(HttpStatus.BAD_REQUEST);
        expect(result.message).toBe(GEENERIC_MSG.ERROR);
    });
});