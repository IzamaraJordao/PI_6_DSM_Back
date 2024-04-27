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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
// Arquivo: src/login/login.service.ts
const common_1 = require("@nestjs/common");
const prisma_service_1 = __importDefault(require("../prisma/prisma.service"));
let LoginService = class LoginService {
    constructor() {
        this.prisma = prisma_service_1.default;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.login.create({
                data,
            });
        });
    }
    findLoginByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.login.findFirst({
                where: { email }, // Usando o campo 'email' para buscar o login
            });
        });
    }
    findUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findUnique({
                where: { id: userId },
            });
        });
    }
    updateUserLastAccess(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.update({
                where: { id: userId },
                data: {},
            });
        });
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoginService);
