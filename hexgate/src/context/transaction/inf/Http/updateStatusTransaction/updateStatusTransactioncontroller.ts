import { Body, Controller, Put, UseGuards } from "@nestjs/common";
import { UpdateStatusDTO } from "../DTO/updateStatus.dto";
import { ROUTE } from "../../../constants/Transaction.contants";
import { UpdateStatus } from "../../../application/updateStatus/updateStatus";
import { JwtAuthGuard } from "src/context/shared/Guards/jwtGuard.guard";
@UseGuards(JwtAuthGuard)
@Controller(ROUTE)
export class TransactionUpdateStatusController{
    constructor(private readonly updateCase: UpdateStatus){}
    @Put("")
    async run(@Body() transaction:UpdateStatusDTO){
        return this.updateCase.run(transaction);
        
    }
}