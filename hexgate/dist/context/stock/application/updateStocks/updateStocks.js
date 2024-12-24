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
exports.UpdateStocks = void 0;
const common_1 = require("@nestjs/common");
const general_contants_1 = require("../../../shared/constants/general.contants");
const stock_contants_1 = require("../../constants/stock.contants");
const stocks_repository_1 = require("../../domain/stocks.repository");
let UpdateStocks = class UpdateStocks {
    constructor(stockrep) {
        this.stockrep = stockrep;
    }
    async execute(stocks) {
        try {
            const updates = [];
            const ids = stocks.map(item => item.id);
            const data = await this.stockrep.getBatch(ids);
            if (data.length != stocks.length) {
                return { code: common_1.HttpStatus.NOT_FOUND, message: stock_contants_1.STOCK_MSG.NOT_FOUND };
            }
            let invalidStocks = false;
            stocks.forEach(stock => {
                if (!invalidStocks) {
                    const stockData = data.find(item => item.uuid == stock.id);
                    if (!stockData || stockData.stock < stock.amount) {
                        invalidStocks = true;
                        return;
                    }
                    stockData.stock = stockData.stock - stock.amount;
                    delete stockData.uuid;
                    updates.push(this.stockrep.updateStock(stock.id, stockData));
                }
            });
            if (invalidStocks) {
                return { code: common_1.HttpStatus.BAD_REQUEST, message: stock_contants_1.STOCK_MSG.INVALID_STOCK };
            }
            const result = await Promise.all(updates);
            return { code: common_1.HttpStatus.OK, message: stock_contants_1.STOCK_MSG.UPDATED, data: result };
        }
        catch (error) {
            return { code: common_1.HttpStatus.BAD_REQUEST, message: general_contants_1.GEENERIC_MSG.ERROR };
        }
    }
};
exports.UpdateStocks = UpdateStocks;
exports.UpdateStocks = UpdateStocks = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stocks_repository_1.StockRepository])
], UpdateStocks);
//# sourceMappingURL=updateStocks.js.map