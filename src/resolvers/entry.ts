import { Entry } from "../entities/Entry";
import { Resolver, Query, Ctx, Arg, Int, Mutation } from "type-graphql";
import { MyContext } from "../types";

@Resolver()
export class EntryResolver {
  @Query(() => [Entry]) // type thats its returning - this case its an array
  Entrys(@Ctx() { em }: MyContext): Promise<Entry[]> {
    return em.find(Entry, {});
  }

  @Query(() => Entry, { nullable: true }) // graphql type thats its returning
  Entry(
    // you can name id to anything, just a variable name
    @Arg("id", () => Int) id: number,
    // typescript returns a Entry or null
    @Ctx() { em }: MyContext
  ): Promise<Entry | null> {
    return em.findOne(Entry, { id }); // where by default
  }

  @Mutation(() => Entry) // graphql type thats its returning
  async createEntry(
    // you can name id to anything, just a variable name
    @Arg("client", () => String) client: string,
    @Arg("project", () => String) project: string,
    @Arg("projectCode", () => String) projectCode: string,
    @Arg("hours", () => String) hours: string,
    @Arg("firstName", () => String) firstName: string,
    @Arg("lastName", () => String) lastName: string,
    @Arg("billable", () => Boolean) billable: boolean,
    @Arg("billableRate", () => Int) billableRate: number,
    // typescript returns a Entry or null
    @Ctx() { em }: MyContext
  ): Promise<Entry | null> {
    const entry = em.create(Entry, {
      client,
      project,
      projectCode,
      hours,
      firstName,
      lastName,
      billable,
      billableRate
    });
    return entry; // where by default
  }
}
