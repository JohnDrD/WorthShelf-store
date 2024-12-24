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
exports.GetStocksCase = void 0;
const common_1 = require("@nestjs/common");
const stocks_repository_1 = require("../../domain/stocks.repository");
const stock_contants_1 = require("../../constants/stock.contants");
const general_contants_1 = require("../../../shared/constants/general.contants");
let GetStocksCase = class GetStocksCase {
    constructor(stockrep) {
        this.stockrep = stockrep;
    }
    async execute(amount, lastId) {
        try {
            const data = await this.stockrep.getStocks(amount, lastId);
            if (data.length == 0) {
                return { code: common_1.HttpStatus.NOT_FOUND, message: stock_contants_1.STOCK_MSG.BOTTOM };
            }
            return { code: common_1.HttpStatus.FOUND, message: stock_contants_1.STOCK_MSG.PAGINATION, data: data };
        }
        catch (error) {
            return { code: common_1.HttpStatus.BAD_REQUEST, message: general_contants_1.GEENERIC_MSG.ERROR };
        }
    }
};
exports.GetStocksCase = GetStocksCase;
exports.GetStocksCase = GetStocksCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stocks_repository_1.StockRepository])
], GetStocksCase);
//# sourceMappingURL=GetStocksCase.js.map