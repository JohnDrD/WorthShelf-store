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
exports.GetByIdCase = void 0;
const common_1 = require("@nestjs/common");
const transaction_repository_1 = require("../../domain/transaction.repository");
const general_contants_1 = require("../../../shared/constants/general.contants");
const Transaction_contants_1 = require("../../constants/Transaction.contants");
let GetByIdCase = class GetByIdCase {
    constructor(transactionRep) {
        this.transactionRep = transactionRep;
    }
    async run(id) {
        try {
            const data = await this.transactionRep.getById(id);
            if (data != null) {
                return { code: common_1.HttpStatus.FOUND, message: Transaction_contants_1.TRANSACTION_MSG.TRANSACTION_FOUND, data: data };
            }
            return { code: common_1.HttpStatus.NOT_FOUND, message: Transaction_contants_1.TRANSACTION_MSG.TRANSACTION_NOT_FOUD };
        }
        catch (error) {
            return { code: common_1.HttpStatus.BAD_REQUEST, message: general_contants_1.GEENERIC_MSG.ERROR };
        }
    }
};
exports.GetByIdCase = GetByIdCase;
exports.GetByIdCase = GetByIdCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transaction_repository_1.TransactionRepository])
], GetByIdCase);
//# sourceMappingURL=getByIdCase.js.map