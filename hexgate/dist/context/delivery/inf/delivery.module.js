"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryModule = void 0;
const common_1 = require("@nestjs/common");
const DynamoDBConnection_db_1 = require("../../shared/inf/DynamoDBConnection.db");
const delivery_repository_1 = require("../domain/delivery.repository");
const DeliveryDynamo_db_1 = require("./repositories/DeliveryDynamo.db");
const DeliveryCreateCase_1 = require("../application/CreateCase/DeliveryCreateCase");
const DeliveryGetByIdCase_1 = require("../application/GetByIdCase/DeliveryGetByIdCase");
const transactionAdapter_controller_1 = require("./Internal/transactionAdapter.controller");
const transactionPort_interface_1 = require("../domain/Internal/transactionPort.interface");
let DeliveryModule = class DeliveryModule {
};
exports.DeliveryModule = DeliveryModule;
exports.DeliveryModule = DeliveryModule = __decorate([
    (0, common_1.Module)({
        providers: [
            DynamoDBConnection_db_1.DynamoConnection,
            DeliveryDynamo_db_1.DeliveryDB,
            DeliveryCreateCase_1.DeliveryCreateCase,
            DeliveryGetByIdCase_1.DeliveryGetByIdCase,
            {
                provide: delivery_repository_1.DeliveryRepository,
                useExisting: DeliveryDynamo_db_1.DeliveryDB
            },
            { provide: transactionPort_interface_1.TransactionDPort,
                useClass: transactionAdapter_controller_1.TransactionDAdapter
            }
        ],
        controllers: [],
        exports: [DeliveryGetByIdCase_1.DeliveryGetByIdCase, DeliveryCreateCase_1.DeliveryCreateCase, transactionPort_interface_1.TransactionDPort]
    })
], DeliveryModule);
//# sourceMappingURL=delivery.module.js.map