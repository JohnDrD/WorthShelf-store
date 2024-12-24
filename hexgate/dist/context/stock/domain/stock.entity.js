"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
const crypto_1 = require("crypto");
class Stock {
    constructor(attr) {
        this.attr = attr;
    }
    static create(createStock) {
        return new Stock({ ...createStock,
            uuid: createStock.uuid ?? (0, crypto_1.randomUUID)(),
            dateCreated: createStock.dateCreated ?? new Date().getTime() });
    }
    toValue() {
        return this.attr;
    }
}
exports.Stock = Stock;
//# sourceMappingURL=stock.entity.js.map