import { HttpStatus, Injectable } from "@nestjs/common";
import { CostumerRepository } from "../../domain/costumer.repository";
import { GEENERIC_MSG } from "src/context/shared/constants/general.contants";
import { COSTUMER_MSG } from "../../constants/costumers.contants";
@Injectable()
export class CostumerByIdCase{
    constructor(private readonly costumerRep: CostumerRepository){}

    async execute(id:string){
        try {
            const data= await this.costumerRep.getById(id);
            if(data==null){
                return  {code:HttpStatus.NOT_FOUND, message:COSTUMER_MSG.USER_NOT_FOUD}
            }
            return {code:HttpStatus.NOT_FOUND, message:COSTUMER_MSG.USER_FOUND, data: data}
        } catch (error) {
            console.log("error: ", error)
             return {code:HttpStatus.BAD_REQUEST, message:GEENERIC_MSG.ERROR}
        }

    }
}