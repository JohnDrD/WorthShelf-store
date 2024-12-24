import { Costumer } from "./costumer.entity";
export declare abstract class CostumerRepository {
    abstract getByMail(email: string): Promise<Costumer | null>;
    abstract getById(id: string): Promise<Costumer | null>;
}
