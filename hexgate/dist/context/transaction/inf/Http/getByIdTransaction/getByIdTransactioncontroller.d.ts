import { GetByIdCase } from "../../../application/getByIdCase/getByIdCase";
export declare class TransactionGetByIdController {
    private readonly getByIdCase;
    constructor(getByIdCase: GetByIdCase);
    run(request: {
        id: string;
    }): Promise<import("../../../../shared/interfaces/response.interface").BaseResponse>;
}
