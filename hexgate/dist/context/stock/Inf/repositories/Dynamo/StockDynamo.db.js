"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockDB = void 0;
const stocks_repository_1 = require("../../../domain/stocks.repository");
const StockDynamo_schema_1 = require("./StockDynamo.schema");
const stock_entity_1 = require("../../../domain/stock.entity");
const common_1 = require("@nestjs/common");
let StockDB = class StockDB extends stocks_repository_1.StockRepository {
    async updateStock(id, data) {
        return StockDynamo_schema_1.StockModel.update(id, data);
    }
    async getBatch(ids) {
        return await StockDynamo_schema_1.StockModel.batchGet(ids);
    }
    async getStocks(amount, lastId) {
        const query = StockDynamo_schema_1.StockModel.scan().limit(amount);
        if (lastId && lastId != '') {
            query.startAt({ uuid: lastId });
        }
        const snapshot = await query.exec();
        return snapshot;
    }
    async getById(id) {
        const data = await StockDynamo_schema_1.StockModel.get(id);
        return new stock_entity_1.Stock(data).toValue();
    }
};
exports.StockDB = StockDB;
exports.StockDB = StockDB = __decorate([
    (0, common_1.Injectable)()
], StockDB);
//# sourceMappingURL=StockDynamo.db.js.map