import { Resolver, Query } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query( () => String) // type thats its returning
  hello() {
    return "hello world"
  }
}