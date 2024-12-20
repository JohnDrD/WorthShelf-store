import { randomUUID } from "node:crypto";
import { CostumerParams } from "./costumerParams.interface";
import { CostumerPrimVal } from "./costumerPrimVal.interface";

export class Costumer{
    constructor(private attr: CostumerPrimVal){}
    static create(data:CostumerParams){
        return new Costumer({
            ...data,
            uuid:data.uuid??randomUUID(),
            password:data.password??""
        });
    }
    toValue(){
        return {
            uuid:this.attr.uuid,
            name:this.attr.name,
            email:this.attr.email,
            phone:this.attr.phone
        }
    }
    getPassword(){
        return this.attr.password
    }
}