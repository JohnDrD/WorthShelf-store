import { UpdateStockDTO } from "../../application/DTO/updateStock.dto";
import { UpdateStocks } from "../../application/updateStocks/updateStocks";
import { TransactionAdapter } from "./transactionAdapter.controller";

describe('TransactionAdapter', () => {
    let transactionAdapter: TransactionAdapter;
    let updateStocksMock;

    beforeEach(() => {
        updateStocksMock = {
            execute: jest.fn(),
        } as unknown as jest.Mocked<UpdateStocks>;

        transactionAdapter = new TransactionAdapter(updateStocksMock);
    });

    it('should return updated stocks when update is successful', async () => {
        const mockStocks: UpdateStockDTO[] = [
            { id: '1', amount: 5 },
            { id: '2', amount: 10 },
        ];

        const mockResponse = {
            data: [
                { id: '1', stock: 45 },
                { id: '2', stock: 90 },
            ],
        };

        updateStocksMock.execute.mockResolvedValue(mockResponse);

        const result = await transactionAdapter.updateStocks(mockStocks);
        expect(updateStocksMock.execute).toHaveBeenCalledWith(mockStocks);
    });
});
