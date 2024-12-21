import { DELIVERY_MOCK, DELIVERY_PRIM_MOCK } from '../../../../../test/unitMocks/delivery.mock'
import { DeliveryRepository } from "../../domain/delivery.repository";
import { DeliveryDTO } from "../DTO/deliveryDTO.interface";
import { DeliveryCreateCase } from "./DeliveryCreateCase";


describe('DeliveryCreateCase', () => {
    let deliveryCreateCase: DeliveryCreateCase;
    let deliveryRepMock: jest.Mocked<DeliveryRepository>;

    beforeEach(() => {
        deliveryRepMock = {
            create: jest.fn(),
        } as unknown as jest.Mocked<DeliveryRepository>;

        deliveryCreateCase = new DeliveryCreateCase(deliveryRepMock);
    });

    it('should return created delivery data on success', async () => {
        const mockData: DeliveryDTO = DELIVERY_PRIM_MOCK;

        deliveryRepMock.create.mockResolvedValue(DELIVERY_MOCK);

        const result = await deliveryCreateCase.execute(mockData);

        expect(deliveryRepMock.create).toHaveBeenCalledWith(mockData);
    });
});
