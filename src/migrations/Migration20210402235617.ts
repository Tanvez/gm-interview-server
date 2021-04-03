import { Migration } from '@mikro-orm/migrations';

export class Migration20210402235617 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "entry" ("id" serial primary key, "client" text not null, "project" text not null, "project_code" text not null, "hours" varchar(255) not null, "first_name" text not null, "last_name" text not null, "billable" bool not null, "billable_rate" int4 not null, "created_at" timestamptz(0) not null default now(), "updated_at" timestamptz(0) not null default now());');
  }

}
