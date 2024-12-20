import { Injectable } from "@nestjs/common";
import { CostumerRepository } from "../../domain/costumer.repository";
@Injectable()
export class CostumerLoginCase{
    constructor(private readonly costumerRep: CostumerRepository){}

    async execute(email:string, password:string){
        const costumerData= await this.costumerRep.getByMail(email);
        if(costumerData){
            const validation= costumerData.getPassword()==password
           if(validation){
            return true;
           }
        }
        return false
    }
}