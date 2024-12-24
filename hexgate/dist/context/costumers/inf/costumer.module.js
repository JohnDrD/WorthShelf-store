"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostumerModule = void 0;
const common_1 = require("@nestjs/common");
const costumerByIdCase_1 = require("../application/costumerById/costumerByIdCase");
const costumerLoginCase_1 = require("../application/login/costumerLoginCase");
const getByIdCostumer_controller_1 = require("./Http/getByIdHttp/getByIdCostumer.controller");
const login_controller_1 = require("./Http/loginHttp/login.controller");
const CostumerDynamo_db_1 = require("./repositories/CostumerDynamo.db");
const costumer_repository_1 = require("../domain/costumer.repository");
const shared_module_1 = require("../../shared/inf/shared.module");
const TransactionPort_interface_1 = require("../domain/Internal/transaction/TransactionPort.interface");
const transactionadapter_controller_1 = require("./Internal/transaction/transactionadapter.controller");
let CostumerModule = class CostumerModule {
};
exports.CostumerModule = CostumerModule;
exports.CostumerModule = CostumerModule = __decorate([
    (0, common_1.Module)({
        providers: [
            costumerByIdCase_1.CostumerByIdCase,
            costumerLoginCase_1.CostumerLoginCase,
            CostumerDynamo_db_1.CostumerDB,
            {
                provide: costumer_repository_1.CostumerRepository,
                useExisting: CostumerDynamo_db_1.CostumerDB
            },
            {
                provide: TransactionPort_interface_1.TransactionPort,
                useClass: transactionadapter_controller_1.TransactionAdapter
            }
        ],
        controllers: [getByIdCostumer_controller_1.CostumerGetByIdController, login_controller_1.LoginController],
        exports: [costumerByIdCase_1.CostumerByIdCase, TransactionPort_interface_1.TransactionPort],
        imports: [shared_module_1.SharedModule]
    })
], CostumerModule);
//# sourceMappingURL=costumer.module.js.map