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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryResolver = void 0;
const Entry_1 = require("../entities/Entry");
const type_graphql_1 = require("type-graphql");
let EntryResolver = class EntryResolver {
    Entrys({ em }) {
        return em.find(Entry_1.Entry, {});
    }
    Entry(id, { em }) {
        return em.findOne(Entry_1.Entry, { id });
    }
    createEntry(client, project, projectCode, hours, firstName, lastName, billable, billableRate, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const entry = em.create(Entry_1.Entry, {
                client,
                project,
                projectCode,
                hours,
                firstName,
                lastName,
                billable,
                billableRate
            });
            return entry;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Entry_1.Entry]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntryResolver.prototype, "Entrys", null);
__decorate([
    type_graphql_1.Query(() => Entry_1.Entry, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EntryResolver.prototype, "Entry", null);
__decorate([
    type_graphql_1.Mutation(() => Entry_1.Entry),
    __param(0, type_graphql_1.Arg("client", () => String)),
    __param(1, type_graphql_1.Arg("project", () => String)),
    __param(2, type_graphql_1.Arg("projectCode", () => String)),
    __param(3, type_graphql_1.Arg("hours", () => String)),
    __param(4, type_graphql_1.Arg("firstName", () => String)),
    __param(5, type_graphql_1.Arg("lastName", () => String)),
    __param(6, type_graphql_1.Arg("billable", () => Boolean)),
    __param(7, type_graphql_1.Arg("billableRate", () => type_graphql_1.Int)),
    __param(8, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, Boolean, Number, Object]),
    __metadata("design:returntype", Promise)
], EntryResolver.prototype, "createEntry", null);
EntryResolver = __decorate([
    type_graphql_1.Resolver()
], EntryResolver);
exports.EntryResolver = EntryResolver;
//# sourceMappingURL=entry.js.map