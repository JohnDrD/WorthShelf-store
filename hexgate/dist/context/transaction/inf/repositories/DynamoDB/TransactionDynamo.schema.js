"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = exports.TransactionSchema = exports.TransactionSchemaType = void 0;
const crypto_1 = require("crypto");
const dynamoose = require("dynamoose");
const Item_1 = require("dynamoose/dist/Item");
class TransactionSchemaType extends Item_1.Item {
}
exports.TransactionSchemaType = TransactionSchemaType;
const productSchema = new dynamoose.Schema({
    id: String,
    amount: Number
});
exports.TransactionSchema = new dynamoose.Schema({
    uuid: {
        type: String,
        hashKey: true,
        default: (0, crypto_1.randomUUID)()
    },
    status: String,
    productsList: {
        type: Array,
        schema: [productSchema]
    },
    userId: String,
    deliveryId: String,
    transactionID: String,
    total: Number
}, { timestamps: {
        createdAt: ["dateCreated"],
        updatedAt: ["dateChanged"],
    } });
exports.TransactionModel = dynamoose.model("WTransaction", exports.TransactionSchema);
//# sourceMappingURL=TransactionDynamo.schema.js.map