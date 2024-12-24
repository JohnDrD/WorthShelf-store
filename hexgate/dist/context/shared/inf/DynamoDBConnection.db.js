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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoConnection = void 0;
const common_1 = require("@nestjs/common");
const dynamoose = require("dynamoose");
let DynamoConnection = class DynamoConnection {
    constructor() {
        this.connect();
    }
    connect() {
        const ddb = new dynamoose.aws.ddb.DynamoDB({
            credentials: {
                accessKeyId: process.env.AWSACSSID,
                secretAccessKey: process.env.AWSSCSS
            },
            region: process.env.AWSR
        });
        dynamoose.aws.ddb.set(ddb);
    }
};
exports.DynamoConnection = DynamoConnection;
exports.DynamoConnection = DynamoConnection = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DynamoConnection);
//# sourceMappingURL=DynamoDBConnection.db.js.map