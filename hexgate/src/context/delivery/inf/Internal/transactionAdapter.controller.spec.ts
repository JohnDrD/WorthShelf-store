import { DELIVERY_MOCK, DELIVERY_PRIM_MOCK } from '../../../../../test/unitMocks/delivery.mock'
import { DeliveryCreateCase } from "../../application/CreateCase/DeliveryCreateCase";
import { DeliveryCreateParams } from "../../domain/deliveryCreateParams.interface";
import { TransactionDAdapter } from "./transactionAdapter.controller";


describe('TransactionDAdapter', () => {
    let transactionDAdapter: TransactionDAdapter;
    let deliveryCreateCaseMock: jest.Mocked<DeliveryCreateCase>;

    beforeEach(() => {
        deliveryCreateCaseMock = {
            execute: jest.fn(),
        } as unknown as jest.Mocked<DeliveryCreateCase>;

        transactionDAdapter = new TransactionDAdapter(deliveryCreateCaseMock);
    });

    it('should return created delivery data on success', async () => {
        const mockParams: DeliveryCreateParams = DELIVERY_PRIM_MOCK
        const mockResponse = DELIVERY_MOCK

        deliveryCreateCaseMock.execute.mockResolvedValue(mockResponse);

        const result = await transactionDAdapter.createDelivery(mockParams);

        expect(result).toEqual(mockResponse);
        expect(deliveryCreateCaseMock.execute).toHaveBeenCalledWith(mockParams);
    });
});
