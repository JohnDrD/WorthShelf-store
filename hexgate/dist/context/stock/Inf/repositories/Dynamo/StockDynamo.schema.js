"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModel = exports.StockSchema = exports.StockSchemaType = void 0;
const crypto_1 = require("crypto");
const dynamoose = require("dynamoose");
const Item_1 = require("dynamoose/dist/Item");
class StockSchemaType extends Item_1.Item {
}
exports.StockSchemaType = StockSchemaType;
exports.StockSchema = new dynamoose.Schema({
    uuid: {
        type: String,
        hashKey: true,
        default: (0, crypto_1.randomUUID)()
    },
    name: String,
    description: String,
    unitValue: Number,
    stock: Number,
    images: {
        type: Array,
        schema: [String]
    },
    dateCreated: Number
});
exports.StockModel = dynamoose.model("WStock", exports.StockSchema);
//# sourceMappingURL=StockDynamo.schema.js.map