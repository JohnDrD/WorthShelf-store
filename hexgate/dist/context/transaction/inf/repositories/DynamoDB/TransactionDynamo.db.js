"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDB = void 0;
const common_1 = require("@nestjs/common");
const transaction_repository_1 = require("../../../domain/transaction.repository");
const TransactionDynamo_schema_1 = require("./TransactionDynamo.schema");
let TransactionDB = class TransactionDB extends transaction_repository_1.TransactionRepository {
    async getById(id) {
        return await TransactionDynamo_schema_1.TransactionModel.get(id);
    }
    async updateStatus(id, data) {
        return TransactionDynamo_schema_1.TransactionModel.update(id, data);
    }
    async createTransaction(transaction) {
        const data = await TransactionDynamo_schema_1.TransactionModel.create(transaction.toValue());
        return data;
    }
};
exports.TransactionDB = TransactionDB;
exports.TransactionDB = TransactionDB = __decorate([
    (0, common_1.Injectable)()
], TransactionDB);
//# sourceMappingURL=TransactionDynamo.db.js.map