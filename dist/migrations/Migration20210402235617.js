"use strict";
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
exports.Migration20210402235617 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210402235617 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "entry" ("id" serial primary key, "client" text not null, "project" text not null, "project_code" text not null, "hours" varchar(255) not null, "first_name" text not null, "last_name" text not null, "billable" bool not null, "billable_rate" int4 not null, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null default now());');
        });
    }
}
exports.Migration20210402235617 = Migration20210402235617;
//# sourceMappingURL=Migration20210402235617.js.map