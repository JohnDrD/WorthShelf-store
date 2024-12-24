"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const getByIdTransactioncontroller_1 = require("./Http/getByIdTransaction/getByIdTransactioncontroller");
const createTransactionCase_1 = require("../application/createTransactionCase/createTransactionCase");
const getByIdCase_1 = require("../application/getByIdCase/getByIdCase");
const TransactionDynamo_db_1 = require("./repositories/DynamoDB/TransactionDynamo.db");
const createTransaction_controller_1 = require("./Http/createTransaction/createTransaction.controller");
const transaction_repository_1 = require("../domain/transaction.repository");
const shared_module_1 = require("../../shared/inf/shared.module");
const delivery_module_1 = require("../../delivery/inf/delivery.module");
const deliveryPort_interface_1 = require("../domain/Internal/delivery/deliveryPort.interface");
const deliveryAdapter_controller_1 = require("./Internal/delivery/deliveryAdapter.controller");
const costumer_module_1 = require("../../costumers/inf/costumer.module");
const costumerPort_interface_1 = require("../domain/Internal/costumer/costumerPort.interface");
const costumerAdapter_controller_1 = require("./Internal/costumer/costumerAdapter.controller");
const stockPort_interface_1 = require("../domain/Internal/stock/stockPort.interface");
const stockAdapter_controller_1 = require("./Internal/stock/stockAdapter.controller");
const Stock_module_1 = require("../../stock/Inf/Stock.module");
let TransactionModule = class TransactionModule {
};
exports.TransactionModule = TransactionModule;
exports.TransactionModule = TransactionModule = __decorate([
    (0, common_1.Module)({
        controllers: [getByIdTransactioncontroller_1.TransactionGetByIdController, createTransaction_controller_1.TransactionCreateController],
        providers: [
            createTransactionCase_1.CreateTransaction,
            getByIdCase_1.GetByIdCase,
            TransactionDynamo_db_1.TransactionDB,
            {
                provide: transaction_repository_1.TransactionRepository,
                useExisting: TransactionDynamo_db_1.TransactionDB,
            },
            { provide: deliveryPort_interface_1.DeliveryPort,
                useClass: deliveryAdapter_controller_1.DeliveryAdapter
            },
            {
                provide: costumerPort_interface_1.CostumerPort,
                useClass: costumerAdapter_controller_1.CostumerAdapter
            }, {
                provide: stockPort_interface_1.StockPort,
                useClass: stockAdapter_controller_1.StockAdapter
            },
        ],
        exports: [createTransactionCase_1.CreateTransaction,
            getByIdCase_1.GetByIdCase],
        imports: [shared_module_1.SharedModule, delivery_module_1.DeliveryModule, costumer_module_1.CostumerModule, Stock_module_1.StockModule]
    })
], TransactionModule);
//# sourceMappingURL=transaction.module.js.map