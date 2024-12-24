import { CostumerParams } from "./costumerParams.interface";
import { CostumerPrimVal } from "./costumerPrimVal.interface";
export declare class Costumer {
    private attr;
    constructor(attr: CostumerPrimVal);
    static create(data: CostumerParams): Costumer;
    toValue(): {
        uuid: string;
        name: string;
        email: string;
        phone: string;
    };
    getPassword(): string;
}
