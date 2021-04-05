import { Entry } from "../entities/Entry";
import {
  Resolver,
  Query,
  Ctx,
  Arg,
  Int,
  Mutation,
  InputType,
  Field,
} from "type-graphql";
import { MyContext } from "../types";

//TODO make seperate file
@InputType()
class EntryInput {
  @Field()
  client: string;

  @Field()
  project: string;

  @Field()
  projectCode: string;

  @Field()
  hours: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  billable: boolean;

  @Field()
  billableRate: number;
}
@Resolver()
export class EntryResolver {
  @Query(() => [Entry]) // type thats its returning - this case its an array
  Entries(@Ctx() { em }: MyContext): Promise<Entry[]> {
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
    @Arg("input") input: EntryInput,
    // typescript returns a Entry or null
    @Ctx() { em }: MyContext
  ): Promise<Entry | null> {
    // TODO ADD VALIDATION FOR FIELDS ex: hours should be decimal etc
    const entry = em.create(Entry, input);
    await em.persistAndFlush(entry);
    return entry; // where by default
  }
}
