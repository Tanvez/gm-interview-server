import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

//can turn classes into type graphql types
// can stack decorators
@ObjectType()
@Entity()
export class Entry {
  @Field() // this exposes to graphql schema
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: 'text' })
  client!: string;

  @Field()
  @Property({ type: 'text' })
  project!: string;
  
  @Field()
  @Property({ type: 'text' })
  projectCode!: string;

  @Field()
  @Property()
  hours!: string;

  @Field()
  @Property({ type: 'text' })
  firstName!: string;
  
  @Field()
  @Property({ type: 'text' })
  lastName!: string;

  @Field()
  @Property({ type: 'boolean' })
  billable!: boolean;

  @Field(()=> Int )
  @Property({ type: 'number' })
  billableRate!: number;

  //hook
  @Field()
  @Property({ type: 'date',  defaultRaw: 'now()' })
  createdAt: Date = new Date();

  @Field()
  @Property({ type: 'date', defaultRaw: 'now()', onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
