import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import { GetStockByIdCase } from '../../../application/getById/stockGetByIdCase'
import { STOCK_MSG } from '../../../constants/stock.contants'
import { GetStockByIdController } from './getByIdStock.controller';


describe('GetStockByIdController', () => {
    let getStockByIdController: GetStockByIdController;
    let getStockByIdCaseMock;

    beforeEach(async () => {
        getStockByIdCaseMock = {
            execute: jest.fn(),
        };

        const app: TestingModule = await Test.createTestingModule({
            controllers: [GetStockByIdController],
            providers: [
                {
                    provide: GetStockByIdCase,
                    useValue: getStockByIdCaseMock,
                },
            ],
        }).compile();

        getStockByIdController = app.get<GetStockByIdController>(GetStockByIdController);
    });

    it('should return FOUND when stock is found', async () => {
        getStockByIdCaseMock.execute.mockResolvedValue({
            code: HttpStatus.FOUND,
            message: STOCK_MSG.FOUND
        });

        const result = await getStockByIdController.getStockById({ id: '1' });

        expect(result.code).toBe(HttpStatus.FOUND);
        expect(result.message).toBe(STOCK_MSG.FOUND);
    });

});