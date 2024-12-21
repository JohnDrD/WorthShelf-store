import { JwtAuthGuard } from './jwtGuard.guard'
import { JwtService } from '@nestjs/jwt'; 
import { UnauthorizedException } from '@nestjs/common'; 
import { ExecutionContext } from '@nestjs/common';

describe('JwtAuthGuard', () => {
    let guard: JwtAuthGuard;
    let jwtServiceMock: jest.Mocked<JwtService>;

    beforeEach(() => {
        jwtServiceMock = {
            verify: jest.fn(),
        } as unknown as jest.Mocked<JwtService>;

        guard = new JwtAuthGuard(jwtServiceMock);
    });

    it('should throw UnauthorizedException if no token is provided', () => {
        const context = {
            switchToHttp: jest.fn().mockReturnValue({
                getRequest: jest.fn().mockReturnValue({ headers: {} }),
            }),
        } as unknown as ExecutionContext;

        expect(() => guard.canActivate(context)).toThrowError(UnauthorizedException);
    });

    it('should throw UnauthorizedException if the token is invalid', () => {
        const context = {
            switchToHttp: jest.fn().mockReturnValue({
                getRequest: jest.fn().mockReturnValue({ headers: { authorization: 'Bearer invalidtoken' } }),
            }),
        } as unknown as ExecutionContext;

        jwtServiceMock.verify.mockImplementationOnce(() => {
            throw new Error('Invalid token');
        });

        expect(() => guard.canActivate(context)).toThrowError(UnauthorizedException);
    });

    it('should attach the user to the request when the token is valid', () => {
        const context = {
            switchToHttp: jest.fn().mockReturnValue({
                getRequest: jest.fn().mockReturnValue({ headers: { authorization: 'Bearer validtoken' } }),
            }),
        } as unknown as ExecutionContext;

        const mockPayload = { userId: '123' };
        jwtServiceMock.verify.mockReturnValueOnce(mockPayload);

        const result = guard.canActivate(context);

        expect(result).toBe(true);
        expect(context.switchToHttp().getRequest().user).toEqual(mockPayload);
    });
});
