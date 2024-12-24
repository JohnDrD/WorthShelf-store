"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostumerDB = void 0;
const common_1 = require("@nestjs/common");
const costumer_repository_1 = require("../../domain/costumer.repository");
const costumer_entity_1 = require("../../domain/costumer.entity");
const CostumerDyname_schema_1 = require("./CostumerDyname.schema");
let CostumerDB = class CostumerDB extends costumer_repository_1.CostumerRepository {
    async getByMail(email) {
        const data = await CostumerDyname_schema_1.CostumerModel.query("email").eq(email).exec();
        return costumer_entity_1.Costumer.create(data[0]);
    }
    async getById(id) {
        return costumer_entity_1.Costumer.create(await CostumerDyname_schema_1.CostumerModel.get(id));
    }
};
exports.CostumerDB = CostumerDB;
exports.CostumerDB = CostumerDB = __decorate([
    (0, common_1.Injectable)()
], CostumerDB);
//# sourceMappingURL=CostumerDynamo.db.js.map