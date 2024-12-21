import { HttpStatus } from '@nestjs/common';
import { CreateTransaction } from '../../../application/createTransactionCase/createTransactionCase'
import { TransactionCreateDTO } from '../DTO/createTransaction.dto';
import { TransactionCreateController } from "./createTransaction.controller";
import { TestingModule, Test } from '@nestjs/testing';
import { TRANSACTION_MSG } from '../../../constants/Transaction.contants'
import { TRANSACTION_DTO_MOCK } from '../../../../../../test/unitMocks/transaction.mock'


describe('TransactionCreateController', () => {
    let controller: TransactionCreateController;
    let createTransactionMock;

    beforeEach(async () => {
        createTransactionMock = {
            run: jest.fn(),
        };

        const app: TestingModule = await Test.createTestingModule({
            controllers: [TransactionCreateController],
            providers: [
                {
                    provide: CreateTransaction,
                    useValue: createTransactionMock,
                },
            ],
        }).compile();

        controller = app.get<TransactionCreateController>(TransactionCreateController);
    });

    it('should return OK when transaction is created successfully', async () => {
        const dto: TransactionCreateDTO = TRANSACTION_DTO_MOCK

        const mockResponse = {
            code: HttpStatus.OK,
            message: TRANSACTION_MSG.CREATED,
            data: { uuid: '', productsList: [], deliveryInfo: {}, userInfo: {} },
        };

        createTransactionMock.run.mockResolvedValue(mockResponse);

        const response = await controller.run(dto);

        expect(response.code).toBe(HttpStatus.OK);
        expect(response.message).toBe(TRANSACTION_MSG.CREATED);
    });
});
