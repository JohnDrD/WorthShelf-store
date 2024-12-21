import { HttpStatus } from "@nestjs/common";
import { TestingModule, Test } from "@nestjs/testing";
import { BaseResponse } from '../../../../shared/interfaces/response.interface'
import { GetByIdCase } from '../../../application/getByIdCase/getByIdCase'
import { TRANSACTION_MSG } from '../../../constants/Transaction.contants'
import { TransactionGetByIdController } from "./getByIdTransactioncontroller";

describe('TransactionGetByIdController', () => {
    let controller: TransactionGetByIdController;
    let getByIdCaseMock;

    beforeEach(async () => {
        getByIdCaseMock = {
            run: jest.fn(),
        };

        const app: TestingModule = await Test.createTestingModule({
            controllers: [TransactionGetByIdController],
            providers: [
                {
                    provide: GetByIdCase,
                    useValue: getByIdCaseMock,
                },
            ],
        }).compile();

        controller = app.get<TransactionGetByIdController>(TransactionGetByIdController);
    });

    it('should return FOUND when transaction is found', async () => {
        const mockResponse: BaseResponse = {
            code: HttpStatus.FOUND,
            message: TRANSACTION_MSG.TRANSACTION_FOUND,
            data: { id: '1', amount: 100 },
        };

        getByIdCaseMock.run.mockResolvedValue(mockResponse);

        const response = await controller.run({ id: '1' });

        expect(response.code).toBe(HttpStatus.FOUND);
        expect(response.message).toBe(TRANSACTION_MSG.TRANSACTION_FOUND);
    });
});