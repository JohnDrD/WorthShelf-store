"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryModel = exports.DeliverySchema = exports.DeliverySchemaType = void 0;
const crypto_1 = require("crypto");
const dynamoose = require("dynamoose");
const Item_1 = require("dynamoose/dist/Item");
class DeliverySchemaType extends Item_1.Item {
}
exports.DeliverySchemaType = DeliverySchemaType;
exports.DeliverySchema = new dynamoose.Schema({
    uuid: {
        type: String,
        hashKey: true,
        default: (0, crypto_1.randomUUID)()
    },
    postCode: String,
    transactionId: String,
    country: String,
    address: String,
    status: String,
    dateSend: Number,
    dateFinish: Number,
    dateCreated: Number,
});
exports.DeliveryModel = dynamoose.model("WDelivery", exports.DeliverySchema);
//# sourceMappingURL=DeliveryDyname.schema.js.map