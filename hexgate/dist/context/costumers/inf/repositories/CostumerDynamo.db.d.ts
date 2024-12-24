import { CostumerRepository } from "../../domain/costumer.repository";
import { Costumer } from "../../domain/costumer.entity";
export declare class CostumerDB extends CostumerRepository {
    getByMail(email: string): Promise<Costumer | null>;
    getById(id: string): Promise<Costumer | null>;
}
