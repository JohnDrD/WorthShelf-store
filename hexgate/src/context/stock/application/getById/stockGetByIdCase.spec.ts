import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { GEENERIC_MSG } from '../../../shared/constants/general.contants'
import { STOCK_MSG } from '../../constants/stock.contants';
import { StockRepository } from '../../domain/stocks.repository';
import { GetStockByIdCase } from './stockGetByIdCase';
import { STOCKS_REPOSITORY_MOCK } from '../../../../../test/unitMocks/stock.mock'

describe('GetStockByIdCase', () => {
    let getStockByIdCase: GetStockByIdCase;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [
                GetStockByIdCase,
                {
                    provide: StockRepository,
                    useValue: STOCKS_REPOSITORY_MOCK,
                },
            ],
        }).compile();

        getStockByIdCase = app.get<GetStockByIdCase>(GetStockByIdCase);
    });

    it('should return FOUND when stock is found', async () => {
        const result = await getStockByIdCase.execute('1');

        expect(result.code).toBe(HttpStatus.FOUND);
        expect(result.message).toBe(STOCK_MSG.FOUND);
    });

    it('should return NOT_FOUND when stock is not found', async () => {
        jest.spyOn(getStockByIdCase.stockrep, 'getById').mockResolvedValue(null);

        const result = await getStockByIdCase.execute('2');

        expect(result.code).toBe(HttpStatus.NOT_FOUND);
        expect(result.message).toBe(STOCK_MSG.NOT_FOUND);
        expect(result.data).toBeUndefined();
    });

    it('should return BAD_REQUEST on error', async () => {
        jest.spyOn(getStockByIdCase.stockrep, 'getById').mockRejectedValue(new Error('Database error'));

        const result = await getStockByIdCase.execute('3');

        expect(result.code).toBe(HttpStatus.BAD_REQUEST);
        expect(result.message).toBe(GEENERIC_MSG.ERROR);
    });
});
