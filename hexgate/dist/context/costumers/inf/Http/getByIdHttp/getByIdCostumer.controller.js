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
exports.CostumerGetByIdController = void 0;
const common_1 = require("@nestjs/common");
const costumerByIdCase_1 = require("../../../application/costumerById/costumerByIdCase");
const costumers_contants_1 = require("../../../constants/costumers.contants");
const jwtGuard_guard_1 = require("../../../../shared/Guards/jwtGuard.guard");
let CostumerGetByIdController = class CostumerGetByIdController {
    constructor(getByIdCase) {
        this.getByIdCase = getByIdCase;
    }
    async run(request) {
        return this.getByIdCase.execute(request.id);
    }
};
exports.CostumerGetByIdController = CostumerGetByIdController;
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CostumerGetByIdController.prototype, "run", null);
exports.CostumerGetByIdController = CostumerGetByIdController = __decorate([
    (0, common_1.UseGuards)(jwtGuard_guard_1.JwtAuthGuard),
    (0, common_1.Controller)(costumers_contants_1.ROUTE),
    __metadata("design:paramtypes", [costumerByIdCase_1.CostumerByIdCase])
], CostumerGetByIdController);
//# sourceMappingURL=getByIdCostumer.controller.js.map