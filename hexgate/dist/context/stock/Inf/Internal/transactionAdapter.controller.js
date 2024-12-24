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
exports.TransactionAdapter = void 0;
const common_1 = require("@nestjs/common");
const TransactionPort_interface_1 = require("../../domain/Internal/TransactionPort.interface");
const updateStocks_1 = require("../../application/updateStocks/updateStocks");
let TransactionAdapter = class TransactionAdapter extends TransactionPort_interface_1.TransactionSPort {
    constructor(updateCase) {
        super();
        this.updateCase = updateCase;
    }
    async updateStocks(stocks) {
        const data = await this.updateCase.execute(stocks);
        return data.data ?? [];
    }
};
exports.TransactionAdapter = TransactionAdapter;
exports.TransactionAdapter = TransactionAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [updateStocks_1.UpdateStocks])
], TransactionAdapter);
//# sourceMappingURL=transactionAdapter.controller.js.map