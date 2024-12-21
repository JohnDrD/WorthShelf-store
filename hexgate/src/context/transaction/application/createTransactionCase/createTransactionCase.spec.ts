import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common'; 
import { CreateTransaction } from './createTransactionCase';
import { TransactionRepository } from '../../domain/transaction.repository';
import { DeliveryPort } from '../../domain/Internal/delivery/deliveryPort.interface';
import { CostumerPort } from '../../domain/Internal/costumer/costumerPort.interface';
import { StockPort } from '../../domain/Internal/stock/stockPort.interface';
import { TransactionCreateDTO } from '../DTO/transactionCreate.dto';
import { COSTUMER_DTO_MOCK, DELIVERY_DTO_MOCK, STOCK_DTO_MOCK, TRANSACTION_DTO_MOCK, TRANSACTION_MOCK } from '../../../../../test/unitMocks/transaction.mock'
import { TRANSACTION_MSG } from '../../constants/Transaction.contants';
import { GEENERIC_MSG } from '../../../shared/constants/general.contants'


describe('CreateTransaction', () => {
    let createTransaction: CreateTransaction;
    let deliveryRepMock: jest.Mocked<DeliveryPort>;
    let costumerRepMock: jest.Mocked<CostumerPort>;
    let stockRepMock: jest.Mocked<StockPort>;

    beforeEach(async () => {
        deliveryRepMock = { createDelivery: jest.fn() };
        costumerRepMock = { getById: jest.fn() };
        stockRepMock = { updateStocks: jest.fn() };

        const app: TestingModule = await Test.createTestingModule({
            providers: [
                CreateTransaction,
                {
                    provide: TransactionRepository,
                    useValue: TRANSACTION_MOCK,
                },
                {
                    provide: DeliveryPort,
                    useValue: deliveryRepMock,
                },
                {
                    provide: CostumerPort,
                    useValue: costumerRepMock,
                },
                {
                    provide: StockPort,
                    useValue: stockRepMock,
                },
            ],
        }).compile();

        createTransaction = app.get<CreateTransaction>(CreateTransaction);
    });

    it('should return OK when transaction is created successfully', async () => {
        const dto: TransactionCreateDTO = TRANSACTION_DTO_MOCK
        stockRepMock.updateStocks.mockResolvedValue([STOCK_DTO_MOCK]);
        deliveryRepMock.createDelivery.mockResolvedValue(DELIVERY_DTO_MOCK);
        costumerRepMock.getById.mockResolvedValue(COSTUMER_DTO_MOCK);

        const response = await createTransaction.run(dto);

        expect(response.code).toBe(HttpStatus.OK);
        expect(response.message).toBe(TRANSACTION_MSG.CREATED);
    });

    it('should return BAD_REQUEST when stock update fails', async () => {
        const dto=TRANSACTION_DTO_MOCK

        stockRepMock.updateStocks.mockResolvedValue([]);

        const response = await createTransaction.run(dto);

        expect(response.code).toBe(HttpStatus.BAD_REQUEST);
        expect(response.message).toBe(GEENERIC_MSG.ERROR);
    });

    it('should return BAD_REQUEST on error', async () => {
        const dto=TRANSACTION_DTO_MOCK

        stockRepMock.updateStocks.mockRejectedValue(new Error('Database error'));

        const response = await createTransaction.run(dto);

        expect(response.code).toBe(HttpStatus.BAD_REQUEST);
        expect(response.message).toBe(GEENERIC_MSG.ERROR);
    });
});