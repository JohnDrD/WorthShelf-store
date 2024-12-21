import { DELIVERY_MOCK, DELIVERY_PRIM_MOCK } from '../../../../../test/unitMocks/delivery.mock'
import { DeliveryRepository } from "../../domain/delivery.repository";
import { DeliveryDTO } from "../DTO/deliveryDTO.interface";
import { DeliveryGetByIdCase } from './DeliveryGetByIdCase';

describe('DeliveryGetByIdCase', () => {
    let deliveryGetByIdCase: DeliveryGetByIdCase;
    let deliveryRepMock: jest.Mocked<DeliveryRepository>;

    beforeEach(() => {
        deliveryRepMock = {
            getById: jest.fn(),
        } as unknown as jest.Mocked<DeliveryRepository>;

        deliveryGetByIdCase = new DeliveryGetByIdCase(deliveryRepMock);
    });

    it('should return delivery data when found', async () => {
        const mockId = '123';

        deliveryRepMock.getById.mockResolvedValue(DELIVERY_MOCK);
        
        await deliveryGetByIdCase.execute(mockId);

        expect(deliveryRepMock.getById).toHaveBeenCalledWith(mockId);
    });
});
