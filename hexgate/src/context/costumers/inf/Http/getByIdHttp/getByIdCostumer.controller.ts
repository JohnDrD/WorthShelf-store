import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { CostumerByIdCase } from "src/context/costumers/application/costumerById/costumerByIdCase";
import { ROUTE } from "src/context/costumers/constants/costumers.contants";
import { JwtAuthGuard } from "src/context/shared/Guards/jwtGuard.guard";
@UseGuards(JwtAuthGuard)
@Controller(ROUTE)
export class CostumerGetByIdController{
    constructor(private readonly getByIdCase: CostumerByIdCase){}
    @Get("/:id")
    async run(@Param() request: {id:string}){
        return this.getByIdCase.execute(request.id);
        
    }
}