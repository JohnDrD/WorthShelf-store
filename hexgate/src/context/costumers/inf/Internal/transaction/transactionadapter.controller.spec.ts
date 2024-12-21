import { CostumerByIdCase } from "src/context/costumers/application/costumerById/costumerByIdCase";
import { TransactionAdapter } from "./transactionadapter.controller";
describe('TransactionAdapter', () => {
    let adapter: TransactionAdapter;
    let getByIdCaseMock;

    beforeEach(() => {
        getByIdCaseMock = {
            execute: jest.fn(),
        } as unknown as jest.Mocked<CostumerByIdCase>;

        adapter = new TransactionAdapter(getByIdCaseMock);
    });

    it('should return a CostumerDTO when the customer is found', async () => {
        const id = '123';
        const mockCostumer = {
            id,
            name: 'John Doe',
            email: 'john.doe@example.com',
            toValue: jest.fn().mockReturnValue({
                id,
                name: 'John Doe',
                email: 'john.doe@example.com',
            }),
        };
        const mockResponse = {
            code: 200,
            message: 'User Found',
            data: mockCostumer,
        };

        getByIdCaseMock.execute.mockResolvedValue(mockResponse);

        const result = await adapter.getById(id);

        expect(result).toEqual(mockCostumer.toValue());
        expect(getByIdCaseMock.execute).toHaveBeenCalledWith(id);
    });
});
