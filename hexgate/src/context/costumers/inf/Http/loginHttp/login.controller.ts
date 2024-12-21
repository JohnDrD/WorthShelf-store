import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CostumerLoginCase } from "../../../application/login/costumerLoginCase";
import { ROUTE } from "../../../constants/costumers.contants";

@Controller(ROUTE)
export class LoginController{
    constructor(private readonly loginCase: CostumerLoginCase){}
    @Post("")
    async run(@Body() request: {email:string, password:string}){
        return this.loginCase.execute(request.email, request.password);
        
    }
}