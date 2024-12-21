import { TransactionRepository } from '../../domain/transaction.repository';
import { HttpStatus } from '@nestjs/common'; 
import { GetByIdCase } from './getByIdCase';
import { BaseResponse } from 'src/context/shared/interfaces/response.interface';
import { TRANSACTION_MSG } from '../../constants/Transaction.contants';
import { GEENERIC_MSG } from '../../../shared/constants/general.contants'
import { TRANSACTION_MOCK, TRANASACTION_MOCK } from '../../../../../test/unitMocks/transaction.mock'
import { Test, TestingModule } from '@nestjs/testing';

describe('GetByIdCase', () => {
    let getByIdCase: GetByIdCase;
    beforeEach(async () => {
        const app: TestingModule= await Test.createTestingModule({
            providers:[
                GetByIdCase,
                {
                    provide: TransactionRepository,
                    useValue: TRANSACTION_MOCK
                }
            ]
        }).compile();
        getByIdCase = app.get(GetByIdCase);
    });

    it('should return FOUND when transaction is found', async () => {
        const mockData = TRANASACTION_MOCK 
        const response: BaseResponse = await getByIdCase.run('1');

        expect(response.code).toBe(HttpStatus.FOUND);
        expect(response.message).toBe(TRANSACTION_MSG.TRANSACTION_FOUND);
        expect(response.data).toEqual(mockData);
    });

    it('should return NOT_FOUND when transaction is not found', async () => {
        jest.spyOn(getByIdCase.transactionRep, 'getById').mockResolvedValue(null);
        const response: BaseResponse = await getByIdCase.run('2');

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(response.message).toBe(TRANSACTION_MSG.TRANSACTION_NOT_FOUD);
    });

    it('should return BAD_REQUEST on error', async () => {
        jest.spyOn(getByIdCase.transactionRep, 'getById').mockRejectedValue(new Error("test"));

        const response: BaseResponse = await getByIdCase.run('3');

        expect(response.code).toBe(HttpStatus.BAD_REQUEST);
        expect(response.message).toBe(GEENERIC_MSG.ERROR);
    });
});
