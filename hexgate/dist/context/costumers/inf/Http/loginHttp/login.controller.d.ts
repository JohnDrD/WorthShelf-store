import { CostumerLoginCase } from "../../../application/login/costumerLoginCase";
export declare class LoginController {
    private readonly loginCase;
    constructor(loginCase: CostumerLoginCase);
    run(request: {
        email: string;
        password: string;
    }): Promise<import("../../../../shared/interfaces/response.interface").BaseResponse>;
}
