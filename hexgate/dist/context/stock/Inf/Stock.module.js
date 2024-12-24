"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const stocks_repository_1 = require("../domain/stocks.repository");
const StockDynamo_db_1 = require("./repositories/Dynamo/StockDynamo.db");
const GetStocksCase_1 = require("../application/getStocks/GetStocksCase");
const stockGetByIdCase_1 = require("../application/getById/stockGetByIdCase");
const updateStocks_1 = require("../application/updateStocks/updateStocks");
const getByIdStock_controller_1 = require("./Http/GetByIdStock/getByIdStock.controller");
const getStocks_controller_1 = require("./Http/GetStocks/getStocks.controller");
const TransactionPort_interface_1 = require("../domain/Internal/TransactionPort.interface");
const transactionAdapter_controller_1 = require("./Internal/transactionAdapter.controller");
const shared_module_1 = require("../../shared/inf/shared.module");
let StockModule = class StockModule {
};
exports.StockModule = StockModule;
exports.StockModule = StockModule = __decorate([
    (0, common_1.Module)({
        exports: [GetStocksCase_1.GetStocksCase, stockGetByIdCase_1.GetStockByIdCase, updateStocks_1.UpdateStocks, TransactionPort_interface_1.TransactionSPort],
        controllers: [getByIdStock_controller_1.GetStockByIdController, getStocks_controller_1.GetStocksController],
        providers: [
            GetStocksCase_1.GetStocksCase, stockGetByIdCase_1.GetStockByIdCase, updateStocks_1.UpdateStocks,
            StockDynamo_db_1.StockDB,
            {
                provide: stocks_repository_1.StockRepository,
                useExisting: StockDynamo_db_1.StockDB
            },
            {
                provide: TransactionPort_interface_1.TransactionSPort,
                useClass: transactionAdapter_controller_1.TransactionAdapter
            }
        ],
        imports: [shared_module_1.SharedModule]
    })
], StockModule);
//# sourceMappingURL=Stock.module.js.map