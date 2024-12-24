"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostumerModel = exports.CostumerSchema = exports.CostumerSchemaType = void 0;
const crypto_1 = require("crypto");
const dynamoose = require("dynamoose");
const Item_1 = require("dynamoose/dist/Item");
class CostumerSchemaType extends Item_1.Item {
}
exports.CostumerSchemaType = CostumerSchemaType;
exports.CostumerSchema = new dynamoose.Schema({
    uuid: {
        type: String,
        hashKey: true,
        default: (0, crypto_1.randomUUID)()
    },
    name: String,
    email: { type: String, index: true },
    phone: String,
    password: String
});
exports.CostumerModel = dynamoose.model("WCostumer", exports.CostumerSchema);
//# sourceMappingURL=CostumerDyname.schema.js.map