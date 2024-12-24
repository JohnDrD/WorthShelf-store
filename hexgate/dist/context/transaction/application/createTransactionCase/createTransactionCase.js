"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransaction = void 0;
const common_1 = require("@nestjs/common");
const transaction_entity_1 = require("../../domain/transaction.entity");
const transaction_repository_1 = require("../../domain/transaction.repository");
const Transaction_contants_1 = require("../../constants/Transaction.contants");
const general_contants_1 = require("../../../shared/constants/general.contants");
const costumerPort_interface_1 = require("../../domain/Internal/costumer/costumerPort.interface");
const deliveryPort_interface_1 = require("../../domain/Internal/delivery/deliveryPort.interface");
const stockPort_interface_1 = require("../../domain/Internal/stock/stockPort.interface");
let CreateTransaction = class CreateTransaction {
    constructor(transactionRep, deliveryRep, costumerRep, stockRep) {
        this.transactionRep = transactionRep;
        this.deliveryRep = deliveryRep;
        this.costumerRep = costumerRep;
        this.stockRep = stockRep;
    }
    async run(dto) {
        try {
            const updateStocks = await this.stockRep.updateStocks(dto.productsList);
            if (updateStocks.length == 0) {
                return { code: common_1.HttpStatus.BAD_REQUEST, message: general_contants_1.GEENERIC_MSG.ERROR };
            }
            const delivery = await this.deliveryRep.createDelivery(dto.deliveryParams);
            const costumer = await this.costumerRep.getById(dto.userId);
            const data = transaction_entity_1.Transaction.create({ ...dto, deliveryId: delivery.uuid });
            const result = await this.transactionRep.createTransaction(data);
            const responseData = {
                ...result,
                productsList: updateStocks,
                deliveryInfo: delivery,
                userInfo: costumer
            };
            return { code: common_1.HttpStatus.OK, message: Transaction_contants_1.TRANSACTION_MSG.CREATED, data: responseData };
        }
        catch (error) {
            console.log("error: ", error);
            return { code: common_1.HttpStatus.BAD_REQUEST, message: general_contants_1.GEENERIC_MSG.ERROR };
        }
    }
};
exports.CreateTransaction = CreateTransaction;
exports.CreateTransaction = CreateTransaction = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transaction_repository_1.TransactionRepository,
        deliveryPort_interface_1.DeliveryPort,
        costumerPort_interface_1.CostumerPort,
        stockPort_interface_1.StockPort])
], CreateTransaction);
//# sourceMappingURL=createTransactionCase.js.map