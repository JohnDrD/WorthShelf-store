import { HttpStatus } from "@nestjs/common";
import { GEENERIC_MSG } from '../../../shared/constants/general.contants'
import { COSTUMER_MSG } from "../../constants/costumers.contants";
import { CostumerRepository } from "../../domain/costumer.repository";
import { CostumerByIdCase } from "./costumerByIdCase";


describe('CostumerByIdCase', () => {
    let costumerByIdCase: CostumerByIdCase;
    let costumerRepMock

    beforeEach(() => {
        costumerRepMock = {
            getById: jest.fn(),
        } as unknown as jest.Mocked<CostumerRepository>;

        costumerByIdCase = new CostumerByIdCase(costumerRepMock);
    });

    it('should return USER_FOUND when the customer is found', async () => {
        const id = '123';
        costumerRepMock.getById.mockResolvedValue(id);

        const response = await costumerByIdCase.execute(id);

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(response.message).toBe(COSTUMER_MSG.USER_FOUND);
    });

    it('should return USER_NOT_FOUND when the customer does not exist', async () => {
        const id = '123';

        costumerRepMock.getById.mockResolvedValue(null);

        const response = await costumerByIdCase.execute(id);

        expect(response.code).toBe(HttpStatus.NOT_FOUND);
        expect(response.message).toBe(COSTUMER_MSG.USER_NOT_FOUD);
        expect(response.data).toBeUndefined();
    });

    it('should return BAD_REQUEST when an error occurs', async () => {
        const id = '123';

        costumerRepMock.getById.mockRejectedValue(new Error('Unexpected error'));

        const response = await costumerByIdCase.execute(id);

        expect(response.code).toBe(HttpStatus.BAD_REQUEST);
        expect(response.message).toBe(GEENERIC_MSG.ERROR);
        expect(response.data).toBeUndefined();
    });
});
