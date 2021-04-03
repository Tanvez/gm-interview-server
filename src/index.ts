import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { HelloResolver } from "./resolvers/hello";
import { EntryResolver } from "./resolvers/entry";
import cors from "cors";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up(); // run migration before anything else

  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, EntryResolver],
      validate: false,
    }),
    // gives access to orm.em functions to use in resolvers
    context: () => ({ em: orm.em }),
  });
  apolloServer.applyMiddleware({ app, cors: true });
  app.listen(4000, () => {
    console.log("server running on port 4000");
  });
};

main().catch((err) => {
  console.error(err);
});
