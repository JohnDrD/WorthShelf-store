

import { Test, TestingModule } from '@nestjs/testing';
import { STOCK_MOCK, STOCKS_REPOSITORY_MOCK,UPDATE_STOCKS_DTO } from '../../../../../test/unitMocks/stock.mock'
import { GEENERIC_MSG } from '../../../shared/constants/general.contants'
import { UpdateStocks } from './updateStocks';
import { HttpStatus } from '@nestjs/common';
import { STOCK_MSG } from '../../constants/stock.contants';
import { StockRepository } from '../../domain/stocks.repository';
import { UpdateStockDTO } from '../DTO/updateStock.dto';
describe('UpdateStocks', () => {
    let updateStocks: UpdateStocks;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateStocks,
                {
                    provide: StockRepository,
                    useValue: STOCKS_REPOSITORY_MOCK,
                },
            ],
        }).compile();

        updateStocks = app.get<UpdateStocks>(UpdateStocks);
    });

    it('should return OK when stocks are updated successfully', async () => {   
        jest.spyOn(updateStocks.stockrep, 'getBatch').mockResolvedValue([STOCK_MOCK]); 

        const result = await updateStocks.execute(UPDATE_STOCKS_DTO);

        expect(result.code).toBe(HttpStatus.OK);
        expect(result.message).toBe(STOCK_MSG.UPDATED);
    });

    it('should return NOT_FOUND when not all stocks are found', async () => {

         jest.spyOn(updateStocks.stockrep, 'getBatch').mockResolvedValue([STOCK_MOCK]); 
        const updateStocksDTO: UpdateStockDTO[] = [
            { id: '1', amount: 5 },
            { id: '2', amount: 10 }
        ];

        const result = await updateStocks.execute(updateStocksDTO);

        expect(result.code).toBe(HttpStatus.NOT_FOUND);
        expect(result.message).toBe(STOCK_MSG.NOT_FOUND);
    });

    it('should return BAD_REQUEST when there is an invalid stock amount', async () => {
        const updateStocksDTO: UpdateStockDTO[] = [
            { id: '1', amount: 15 }, 
        ];

        jest.spyOn(updateStocks.stockrep, 'getBatch').mockResolvedValue([STOCK_MOCK]);

        const result = await updateStocks.execute(updateStocksDTO);

        expect(result.code).toBe(HttpStatus.BAD_REQUEST);
        expect(result.message).toBe(STOCK_MSG.INVALID_STOCK);
    });

    it('should return BAD_REQUEST on error', async () => {
        jest.spyOn(updateStocks.stockrep, 'getBatch').mockRejectedValue(new Error('Database error'));

        const updateStocksDTO: UpdateStockDTO[] = [
            { id: '1', amount: 5 },
            { id: '2', amount: 10 },
        ];

        const result = await updateStocks.execute(updateStocksDTO);

        expect(result.code).toBe(HttpStatus.BAD_REQUEST);
        expect(result.message).toBe(GEENERIC_MSG.ERROR);
    });
});
