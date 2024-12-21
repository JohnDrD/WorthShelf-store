import { HttpStatus } from "@nestjs/common";
import { CostumerLoginCase } from "../../../application/login/costumerLoginCase";
import { COSTUMER_MSG } from "../../../constants/costumers.contants";
import { LoginController } from "./login.controller";


describe('LoginController', () => {
    let controller: LoginController;
    let loginCaseMock: jest.Mocked<CostumerLoginCase>;

    beforeEach(() => {
        loginCaseMock = {
            execute: jest.fn(),
        } as unknown as jest.Mocked<CostumerLoginCase>;

        controller = new LoginController(loginCaseMock);
    });

    it('should return VALID_USER when login is successful', async () => {
        const request = { email: 'user@example.com', password: 'securepassword' };
        const mockResponse = {
            code: HttpStatus.OK,
            message: COSTUMER_MSG.VALID_USER,
            data: { token: 'sample.jwt.token' },
        };

        loginCaseMock.execute.mockResolvedValue(mockResponse);

        const response = await controller.run(request);

        expect(response).toEqual(mockResponse);
        expect(loginCaseMock.execute).toHaveBeenCalledWith(request.email, request.password);
    });

    it('should return INVALID_USER when login fails due to incorrect credentials', async () => {
        const request = { email: 'user@example.com', password: 'wrongpassword' };
        const mockResponse = {
            code: HttpStatus.BAD_REQUEST,
            message: COSTUMER_MSG.INVALID_USER,
        };

        loginCaseMock.execute.mockResolvedValue(mockResponse);

        const response = await controller.run(request);

        expect(response).toEqual(mockResponse);
        expect(loginCaseMock.execute).toHaveBeenCalledWith(request.email, request.password);
    });

    it('should return INVALID_USER when an error occurs', async () => {
        const request = { email: 'user@example.com', password: 'any' };
        const mockResponse = {
            code: HttpStatus.BAD_REQUEST,
            message: COSTUMER_MSG.INVALID_USER,
        };

        loginCaseMock.execute.mockResolvedValue(mockResponse);

        const response = await controller.run(request);

        expect(response).toEqual(mockResponse);
        expect(loginCaseMock.execute).toHaveBeenCalledWith(request.email, request.password);
    });
});
