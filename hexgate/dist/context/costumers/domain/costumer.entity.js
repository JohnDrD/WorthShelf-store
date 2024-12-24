"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Costumer = void 0;
const node_crypto_1 = require("node:crypto");
class Costumer {
    constructor(attr) {
        this.attr = attr;
    }
    static create(data) {
        if (data == null) {
            return null;
        }
        return new Costumer({
            ...data,
            uuid: data.uuid ?? (0, node_crypto_1.randomUUID)(),
            password: data.password ?? ""
        });
    }
    toValue() {
        return {
            uuid: this.attr.uuid,
            name: this.attr.name,
            email: this.attr.email,
            phone: this.attr.phone
        };
    }
    getPassword() {
        return this.attr.password;
    }
}
exports.Costumer = Costumer;
//# sourceMappingURL=costumer.entity.js.map