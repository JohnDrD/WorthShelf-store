import { HttpStatus } from "@nestjs/common";
import { CostumerByIdCase } from '../../../application/costumerById/costumerByIdCase'
import { COSTUMER_MSG } from "../../../constants/costumers.contants";
import { GEENERIC_MSG } from '../../../../shared/constants/general.contants'
import { CostumerGetByIdController } from "./getByIdCostumer.controller";


describe('CostumerGetByIdController', () => {
    let controller: CostumerGetByIdController;
    let getByIdCaseMock;

    beforeEach(() => {
        getByIdCaseMock = {
            execute: jest.fn(),
        } as unknown as jest.Mocked<CostumerByIdCase>;

        controller = new CostumerGetByIdController(getByIdCaseMock);
    });

    it('should return USER_FOUND when the customer is found', async () => {
        const id = '123';
        const mockResponse = {
            code: HttpStatus.NOT_FOUND, // Fix the expected status
            message: COSTUMER_MSG.USER_FOUND,
            data: { id, name: 'John Doe', email: 'john.doe@example.com' },
        };

        getByIdCaseMock.execute.mockResolvedValue(mockResponse);

        const response = await controller.run({ id });

        expect(response).toEqual(mockResponse);
        expect(getByIdCaseMock.execute).toHaveBeenCalledWith(id);
    });

    it('should return USER_NOT_FOUND when the customer does not exist', async () => {
        const id = '123';
        const mockResponse = {
            code: HttpStatus.NOT_FOUND,
            message: COSTUMER_MSG.USER_NOT_FOUD,
        };

        getByIdCaseMock.execute.mockResolvedValue(mockResponse);

        const response = await controller.run({ id });

        expect(response).toEqual(mockResponse);
        expect(getByIdCaseMock.execute).toHaveBeenCalledWith(id);
    });

    it('should return BAD_REQUEST when an error occurs', async () => {
        const id = '123';
        const mockResponse = {
            code: HttpStatus.BAD_REQUEST,
            message: GEENERIC_MSG.ERROR,
        };

        getByIdCaseMock.execute.mockResolvedValue(mockResponse);

        const response = await controller.run({ id });

        expect(response).toEqual(mockResponse);
        expect(getByIdCaseMock.execute).toHaveBeenCalledWith(id);
    });
});
