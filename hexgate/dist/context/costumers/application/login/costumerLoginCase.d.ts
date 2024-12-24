import { CostumerRepository } from "../../domain/costumer.repository";
import { BaseResponse } from '../../../shared/interfaces/response.interface';
import { JwtService } from "@nestjs/jwt";
export declare class CostumerLoginCase {
    private readonly costumerRep;
    private readonly jwtService;
    constructor(costumerRep: CostumerRepository, jwtService: JwtService);
    execute(email: string, password: string): Promise<BaseResponse>;
    createToken(user: string): string;
}
