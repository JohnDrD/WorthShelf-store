import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common";
import { CostumerLoginCase } from "src/context/costumers/application/login/costumerLoginCase";
import { ROUTE } from "src/context/costumers/constants/costumers.contants";
import { JwtAuthGuard } from "src/context/shared/Guards/jwtGuard.guard";

@Controller(ROUTE)
@UseGuards(JwtAuthGuard)
export class LoginController{
    constructor(private readonly loginCase: CostumerLoginCase){}
    @Post("")
    async run(@Body() request: {email:string, password:string}){
        return this.loginCase.execute(request.email, request.password);
        
    }
}