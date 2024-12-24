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
exports.CostumerLoginCase = void 0;
const common_1 = require("@nestjs/common");
const costumer_repository_1 = require("../../domain/costumer.repository");
const costumers_contants_1 = require("../../constants/costumers.contants");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let CostumerLoginCase = class CostumerLoginCase {
    constructor(costumerRep, jwtService) {
        this.costumerRep = costumerRep;
        this.jwtService = jwtService;
    }
    async execute(email, password) {
        try {
            const costumerData = await this.costumerRep.getByMail(email);
            if (!costumerData) {
                return { code: common_1.HttpStatus.BAD_REQUEST, message: costumers_contants_1.COSTUMER_MSG.INVALID_USER };
            }
            const validation = await bcrypt.compare(password, costumerData.getPassword());
            if (!validation) {
                return { code: common_1.HttpStatus.BAD_REQUEST, message: costumers_contants_1.COSTUMER_MSG.INVALID_USER };
            }
            const token = this.createToken(email);
            return { code: common_1.HttpStatus.OK, message: costumers_contants_1.COSTUMER_MSG.VALID_USER, data: { token: token, user: costumerData.toValue() } };
        }
        catch (error) {
            return { code: common_1.HttpStatus.BAD_REQUEST, message: costumers_contants_1.COSTUMER_MSG.INVALID_USER };
        }
    }
    createToken(user) {
        return this.jwtService.sign({ user: user }, { expiresIn: "1h" });
    }
};
exports.CostumerLoginCase = CostumerLoginCase;
exports.CostumerLoginCase = CostumerLoginCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [costumer_repository_1.CostumerRepository, jwt_1.JwtService])
], CostumerLoginCase);
//# sourceMappingURL=costumerLoginCase.js.map