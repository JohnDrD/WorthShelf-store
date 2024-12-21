import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import { STOCK_MSG } from '../../../constants/stock.contants'
import { BaseResponse } from '../../../../shared/interfaces/response.interface'
import { GetStocksCase } from '../../../application/getStocks/GetStocksCase'
import { GetStocksController } from './getStocks.controller';
describe('GetStocksController', () => {
    let getStocksController: GetStocksController;
    let getStocksCaseMock;

    beforeEach(async () => {
        getStocksCaseMock = {
            execute: jest.fn(),
        };

        const app: TestingModule = await Test.createTestingModule({
            controllers: [GetStocksController],
            providers: [
                {
                    provide: GetStocksCase,
                    useValue: getStocksCaseMock,
                },
            ],
        }).compile();

        getStocksController = app.get<GetStocksController>(GetStocksController);
    });

    it('should return FOUND when stocks are available', async () => {

        getStocksCaseMock.execute.mockResolvedValue({
            code: HttpStatus.FOUND,
            message: STOCK_MSG.PAGINATION,
        });

        const result: BaseResponse = await getStocksController.getStockspagination({
            amount: '2',
            lastId: '1',
        });

        expect(result.code).toBe(HttpStatus.FOUND);
        expect(result.message).toBe(STOCK_MSG.PAGINATION);
    });
});
