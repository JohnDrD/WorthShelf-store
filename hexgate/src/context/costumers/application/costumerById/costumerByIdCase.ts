import { Injectable } from "@nestjs/common";
import { CostumerRepository } from "../../domain/costumer.repository";
@Injectable()
export class CostumerByIdCase{
    constructor(private readonly costumerRep: CostumerRepository){}

    async execute(id:string){
        return this.costumerRep.getById(id);
    }
}