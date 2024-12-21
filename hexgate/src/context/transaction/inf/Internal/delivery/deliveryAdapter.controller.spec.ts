import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryDTO } from '../../../domain/Internal/delivery/deliveryDTO.interface'
import { TransactionDPort } from '../../../../delivery/domain/Internal/transactionPort.interface'
import { DeliveryAdapter } from '../delivery/deliveryAdapter.controller';
import { DELIVERY_DTO_MOCK } from '../../../../../../test/unitMocks/transaction.mock'

describe('DeliveryAdapter', () => {
    let deliveryAdapter: DeliveryAdapter;
    let transactionDPortMock: jest.Mocked<TransactionDPort>;

    beforeEach(async () => {
        transactionDPortMock = {
            createDelivery: jest.fn(),
        };

        const app: TestingModule = await Test.createTestingModule({
            providers: [
                DeliveryAdapter,
                {
                    provide: TransactionDPort,
                    useValue: transactionDPortMock,
                },
            ],
        }).compile();

        deliveryAdapter = app.get<DeliveryAdapter>(DeliveryAdapter);
    });

    it('should return a valid DeliveryDTO when createDelivery is called successfully', async () => {
        const mockInputData: DeliveryDTO =DELIVERY_DTO_MOCK;
        
        const mockResponse = {
            attr:null,
            toValue: jest.fn().mockReturnValue(mockInputData),
        };
        transactionDPortMock.createDelivery.mockResolvedValue(null);

        await deliveryAdapter.createDelivery(mockInputData);

        expect(transactionDPortMock.createDelivery).toHaveBeenCalledWith(mockInputData);
    });
});