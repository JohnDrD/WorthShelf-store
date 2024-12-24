"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delivery = void 0;
const node_crypto_1 = require("node:crypto");
class Delivery {
    constructor(attr) {
        this.attr = attr;
    }
    static create(data) {
        return new Delivery({ ...data,
            uuid: data.uuid ?? (0, node_crypto_1.randomUUID)()
        });
    }
    toValue() {
        return this.attr;
    }
}
exports.Delivery = Delivery;
//# sourceMappingURL=delivery.entity.js.map