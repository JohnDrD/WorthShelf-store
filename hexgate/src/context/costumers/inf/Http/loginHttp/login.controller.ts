import { Body, Controller, Param, Post } from "@nestjs/common";
import { CostumerLoginCase } from "src/context/costumers/application/login/costumerLoginCase";
import { ROUTE } from "src/context/costumers/constants/costumers.contants";

@Controller(ROUTE)
export class LoginController{
    constructor(private readonly loginCase: CostumerLoginCase){}
    @Post("")
    async run(@Body() request: {email:string, password:string}){
        return this.loginCase.execute(request.email, request.password);
        
    }
}