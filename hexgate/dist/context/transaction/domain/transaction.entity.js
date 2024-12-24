"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const node_crypto_1 = require("node:crypto");
class Transaction {
    constructor(attr) {
        this.attr = attr;
    }
    static create(data) {
        const date = new Date();
        return new Transaction({
            ...data,
            uuid: data.uuid ?? (0, node_crypto_1.randomUUID)(),
            transactionID: data.transactionID ?? "",
            deliveryId: data.deliveryId ?? "",
            dateCreated: data.dateCreated ?? date.getTime(),
            dateChanged: data.dateChanged ?? date.getTime()
        });
    }
    toValue() {
        return { ...this.attr };
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map