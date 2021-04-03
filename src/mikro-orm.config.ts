import { __prod__, __dbName__, __dbType__, __dbHost__ } from "./constants";
import { Entry } from "./entities/Entry";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to folder with migration files
    pattern: /^[\w-]+\d+\.[tj]s$/
  },
  entities: [Entry], // corresponds to db tables
  dbName: __dbName__,
  host: __dbHost__,
  type: __dbType__,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
// types for autocompletion