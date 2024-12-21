import { HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { BaseResponse } from "src/context/shared/interfaces/response.interface";
import { COSTUMER_MSG } from "../../constants/costumers.contants";
import { CostumerRepository } from "../../domain/costumer.repository";
import { CostumerLoginCase } from "./costumerLoginCase";
import * as bcrypt from 'bcrypt';
describe('CostumerLoginCase', () => {
    let costumerLoginCase: CostumerLoginCase;
    let costumerRepMock;
    let jwtServiceMock: jest.Mocked<JwtService>;

    beforeEach(() => {
        costumerRepMock = {
            getByMail: jest.fn(),
        } as unknown as jest.Mocked<CostumerRepository>;

        jwtServiceMock = {
            sign: jest.fn(),
        } as unknown as jest.Mocked<JwtService>;

        costumerLoginCase = new CostumerLoginCase(costumerRepMock, jwtServiceMock);
    });

    it('should return a token when credentials are valid', async () => {
        const email = 'test@example.com';
        const password = 'password123';
        const mockCostumerData = {
            getPassword: () => 'hashedPassword',
        };
        const mockToken = 'mockJwtToken';

        costumerRepMock.getByMail.mockResolvedValue(mockCostumerData);
        jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);
        jwtServiceMock.sign.mockReturnValue(mockToken);

        const result: BaseResponse = await costumerLoginCase.execute(email, password);

        expect(result.code).toBe(HttpStatus.OK);
        expect(result.message).toBe(COSTUMER_MSG.VALID_USER);
        expect(result.data).toEqual({ token: mockToken });
    });

    it('should return an error when user is not found', async () => {
        const email = 'test@example.com';
        const password = 'password123';

        costumerRepMock.getByMail.mockResolvedValue(null);

        const result: BaseResponse = await costumerLoginCase.execute(email, password);

        expect(result.code).toBe(HttpStatus.BAD_REQUEST);
        expect(result.message).toBe(COSTUMER_MSG.INVALID_USER);
    });

    it('should return an error when the password is incorrect', async () => {
        const email = 'test@example.com';
        const password = 'password123';
        const mockCostumerData = {
            getPassword: () => 'hashedPassword',
        };

        costumerRepMock.getByMail.mockResolvedValue(mockCostumerData);
        jest.spyOn(bcrypt, 'compare').mockResolvedValue(false);

        const result: BaseResponse = await costumerLoginCase.execute(email, password);

        expect(result.code).toBe(HttpStatus.BAD_REQUEST);
        expect(result.message).toBe(COSTUMER_MSG.INVALID_USER);
    });

    it('should handle unexpected errors gracefully', async () => {
        const email = 'test@example.com';
        const password = 'password123';

        costumerRepMock.getByMail.mockRejectedValue(new Error('Unexpected error'));

        const result: BaseResponse = await costumerLoginCase.execute(email, password);

        expect(result.code).toBe(HttpStatus.BAD_REQUEST);
        expect(result.message).toBe(COSTUMER_MSG.INVALID_USER);
    });
});
