import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { CostumerByIdCase } from '../../../application/costumerById/costumerByIdCase'
import { ROUTE } from "../../../constants/costumers.contants";
import { JwtAuthGuard } from '../../../../shared/Guards/jwtGuard.guard'
@UseGuards(JwtAuthGuard)
@Controller(ROUTE)
export class CostumerGetByIdController{
    constructor(private readonly getByIdCase: CostumerByIdCase){}
    @Get("/:id")
    async run(@Param() request: {id:string}){
        return this.getByIdCase.execute(request.id);
        
    }
}