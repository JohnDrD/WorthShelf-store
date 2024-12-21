import { HttpStatus, Injectable } from "@nestjs/common";
import { CostumerRepository } from "../../domain/costumer.repository";
import { BaseResponse } from '../../../shared/interfaces/response.interface'
import { COSTUMER_MSG } from "../../constants/costumers.contants";
import * as bcrypt from 'bcrypt';
import {JwtService } from "@nestjs/jwt";
@Injectable()
export class CostumerLoginCase{
    constructor(private readonly costumerRep: CostumerRepository, private readonly jwtService:JwtService){}
    async execute(email:string, password:string):Promise<BaseResponse>{
        try {
            const costumerData= await this.costumerRep.getByMail(email);
            if(!costumerData){
                return {code:HttpStatus.BAD_REQUEST, message:COSTUMER_MSG.INVALID_USER}
            }   
            const validation= await bcrypt.compare(costumerData.getPassword(),password) 
               if(!validation){
                return {code:HttpStatus.BAD_REQUEST, message:COSTUMER_MSG.INVALID_USER}
               }
               const token= this.createToken(email);
             return {code:HttpStatus.OK, message:COSTUMER_MSG.VALID_USER, data:{token:token}}
        } catch (error) {
            return {code:HttpStatus.BAD_REQUEST, message:COSTUMER_MSG.INVALID_USER}
        }
    }
    createToken(user:string ){
        return this.jwtService.sign({user:user},{expiresIn:"1h"})
    }
}