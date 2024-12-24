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
exports.TransactionGetByIdController = void 0;
const common_1 = require("@nestjs/common");
const getByIdCase_1 = require("../../../application/getByIdCase/getByIdCase");
const Transaction_contants_1 = require("../../../constants/Transaction.contants");
const jwtGuard_guard_1 = require("../../../../shared/Guards/jwtGuard.guard");
let TransactionGetByIdController = class TransactionGetByIdController {
    constructor(getByIdCase) {
        this.getByIdCase = getByIdCase;
    }
    async run(request) {
        return this.getByIdCase.run(request.id);
    }
};
exports.TransactionGetByIdController = TransactionGetByIdController;
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionGetByIdController.prototype, "run", null);
exports.TransactionGetByIdController = TransactionGetByIdController = __decorate([
    (0, common_1.UseGuards)(jwtGuard_guard_1.JwtAuthGuard),
    (0, common_1.Controller)(Transaction_contants_1.ROUTE),
    __metadata("design:paramtypes", [getByIdCase_1.GetByIdCase])
], TransactionGetByIdController);
//# sourceMappingURL=getByIdTransactioncontroller.js.map