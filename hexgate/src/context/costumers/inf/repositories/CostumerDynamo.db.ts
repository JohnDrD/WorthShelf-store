import { Injectable } from "@nestjs/common";
import { CostumerRepository } from "../../domain/costumer.repository";
import { Costumer } from "../../domain/costumer.entity";
import { CostumerModel } from "./CostumerDyname.schema";


@Injectable()
export class CostumerDB extends CostumerRepository{
    async getByMail(email: string): Promise<Costumer | null> {
        const data= await CostumerModel.query("email").eq(email).exec();
        console.log("data: ", data)
        return 
    }
   async getById(id: string): Promise<Costumer | null> {
      return new Costumer(await CostumerModel.get(id));
    }
}