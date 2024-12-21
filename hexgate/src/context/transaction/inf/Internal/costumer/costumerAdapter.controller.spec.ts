import { TestingModule, Test } from "@nestjs/testing";
import { CostumerDTO } from '../../../domain/Internal/costumer/constumerDTO.interface'
import { TransactionPort } from '../../../../costumers/domain/Internal/transaction/TransactionPort.interface'
import { CostumerAdapter } from "./costumerAdapter.controller";
import { COSTUMER_DTO_MOCK } from '../../../../../../test/unitMocks/transaction.mock'

describe('CostumerAdapter', () => {
    let costumerAdapter: CostumerAdapter;
    let transactionPortMock: jest.Mocked<TransactionPort>;

    beforeEach(async () => {
        transactionPortMock = { getById: jest.fn() };

        const app: TestingModule = await Test.createTestingModule({
            providers: [
                CostumerAdapter,
                {
                    provide: TransactionPort,
                    useValue: transactionPortMock,
                },
            ],
        }).compile();

        costumerAdapter = app.get<CostumerAdapter>(CostumerAdapter);
    });

    it('should return costumer details when found', async () => {
        const mockCostumerDTO: CostumerDTO = COSTUMER_DTO_MOCK;
        
        transactionPortMock.getById.mockResolvedValue(mockCostumerDTO);

        const result = await costumerAdapter.getById('1');

        expect(result).toEqual(mockCostumerDTO);
        expect(transactionPortMock.getById).toHaveBeenCalledWith('1');
    });
});