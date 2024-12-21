import { Injectable } from "@nestjs/common";
import { CostumerByIdCase } from "../../../application/costumerById/costumerByIdCase";
import { CostumerDTO } from "../../../domain/Internal/transaction/constumerDTO.interface";
import { TransactionPort } from "../../../domain/Internal/transaction/TransactionPort.interface";
@Injectable()
export class TransactionAdapter extends TransactionPort{
    constructor(private getByIdCase: CostumerByIdCase){
        super();
    }
   async getById(id: string): Promise<CostumerDTO> {
    const data= (await this.getByIdCase.execute(id)).data
        return data? data.toValue(): null
    }
    
}