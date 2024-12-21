import { TestingModule, Test } from "@nestjs/testing";
import { TransactionSPort } from '../../../../stock/domain/Internal/TransactionPort.interface'
import { StockDTO } from '../../../domain/Internal/stock/stockDTO.interface'
import { StockUpdateDTO } from '../../../domain/Internal/stock/stockUpdate.interface'
import { StockAdapter } from "./stockAdapter.controller";
import { STOCK_DTO_MOCK } from '../../../../../../test/unitMocks/transaction.mock' 


describe('StockAdapter', () => {
    let stockAdapter: StockAdapter;
    let transactionSPortMock: jest.Mocked<TransactionSPort>;

    beforeEach(async () => {
        transactionSPortMock = {
            updateStocks: jest.fn(),
        };

        const app: TestingModule = await Test.createTestingModule({
            providers: [
                StockAdapter,
                {
                    provide: TransactionSPort,
                    useValue: transactionSPortMock,
                },
            ],
        }).compile();

        stockAdapter = app.get<StockAdapter>(StockAdapter);
    });

    it('should return updated stocks when updateStocks is called successfully', async () => {
        const mockStocks: StockUpdateDTO[] = [{ id: '1', amount: 10 }];
        const mockStockResponse: StockDTO[] = [STOCK_DTO_MOCK];

        transactionSPortMock.updateStocks.mockResolvedValue(mockStockResponse);

        const result = await stockAdapter.updateStocks(mockStocks);

        expect(result).toEqual(mockStockResponse);
        expect(transactionSPortMock.updateStocks).toHaveBeenCalledWith(mockStocks);
    });
});
