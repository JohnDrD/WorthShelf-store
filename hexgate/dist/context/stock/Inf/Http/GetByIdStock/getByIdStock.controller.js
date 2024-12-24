"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStockByIdController = void 0;
const common_1 = require("@nestjs/common");
const stockGetByIdCase_1 = require("../../../application/getById/stockGetByIdCase");
const stock_contants_1 = require("../../../constants/stock.contants");
let GetStockByIdController = class GetStockByIdController {
    constructor(getById) {
        this.getById = getById;
    }
    async getStockById(request) {
        return await this.getById.execute(request.id);
    }
};
exports.GetStockByIdController = GetStockByIdController;
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetStockByIdController.prototype, "getStockById", null);
exports.GetStockByIdController = GetStockByIdController = __decorate([
    (0, common_1.Controller)(stock_contants_1.ROUTE),
    __metadata("design:paramtypes", [stockGetByIdCase_1.GetStockByIdCase])
], GetStockByIdController);
//# sourceMappingURL=getByIdStock.controller.js.map