"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryDB = void 0;
const common_1 = require("@nestjs/common");
const delivery_repository_1 = require("../../domain/delivery.repository");
const delivery_entity_1 = require("../../domain/delivery.entity");
const DeliveryDyname_schema_1 = require("./DeliveryDyname.schema");
const node_crypto_1 = require("node:crypto");
let DeliveryDB = class DeliveryDB extends delivery_repository_1.DeliveryRepository {
    async getById(id) {
        return delivery_entity_1.Delivery.create(await DeliveryDyname_schema_1.DeliveryModel.get(id));
    }
    async create(params) {
        const dataa = (0, node_crypto_1.randomUUID)();
        const data = await DeliveryDyname_schema_1.DeliveryModel.create({ ...params, uuid: dataa });
        return delivery_entity_1.Delivery.create(data);
    }
};
exports.DeliveryDB = DeliveryDB;
exports.DeliveryDB = DeliveryDB = __decorate([
    (0, common_1.Injectable)()
], DeliveryDB);
//# sourceMappingURL=DeliveryDynamo.db.js.map