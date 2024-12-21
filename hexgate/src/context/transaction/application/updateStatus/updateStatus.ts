import { HttpStatus, Injectable } from '@nestjs/common';
import { TransactionRepository } from '../../domain/transaction.repository';
import { TransactionStatusDTO } from '../DTO/transactionStatus.dto';
import {
  TRANSACTION_MSG,
  TRANSACTION_STATES,
} from '../../constants/Transaction.contants';
import { GEENERIC_MSG } from '../../../shared/constants/general.contants';
import { TransactionSummary } from '../DTO/transactionSummary.dto';
import { DeliveryPort } from '../../domain/Internal/delivery/deliveryPort.interface';
import { CostumerPort } from '../../domain/Internal/costumer/costumerPort.interface';

@Injectable()
export class UpdateStatus {
  constructor(
    private readonly transactionRep: TransactionRepository,
    private readonly deliveryRep: DeliveryPort,
    private readonly costumerRep: CostumerPort,
  ) {}

  async run(statusUpdate: TransactionStatusDTO): Promise<any> {
    try {
      const data = await this.transactionRep.getById(statusUpdate.id);
      if (!data) {
        return {
          code: HttpStatus.NOT_FOUND,
          message: TRANSACTION_MSG.TRANSACTION_NOT_FOUD,
        };
      }
      data.status = statusUpdate.status;
      const responseData: TransactionSummary = {
        uuid: data.uuid,
        total: data.total,
        dateCreated: data.dateCreated,
        dateChanged: data.dateChanged,
        productsList: data.productsList,
        status: data.status,
      };
      if (statusUpdate.status == TRANSACTION_STATES.PAID) {
        const delivery = await this.deliveryRep.createDelivery(
          statusUpdate.deliveryParams,
        );

        
        const costumer= await this.costumerRep.getById(data.userId);

        responseData.deliveryInfo = delivery;
        responseData.userInfo = costumer;
      }
      delete data.dateChanged
      const id= data.uuid
      delete data.uuid
      await this.transactionRep.updateStatus(id,data);
      return {
        code: HttpStatus.OK,
        message: TRANSACTION_MSG.TRANSACTION_UPDATED,
        data: responseData,
      };
    } catch (error) {
      return { code: HttpStatus.BAD_REQUEST, message: GEENERIC_MSG.ERROR };
    }
  }
}
