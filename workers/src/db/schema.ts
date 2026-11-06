import * as DrizzleSQL from "drizzle-orm/sqlite-core";

export const users = DrizzleSQL.sqliteTable("users", {
  email: DrizzleSQL.text("email").unique().notNull(),
  id: DrizzleSQL.integer("id").primaryKey({ autoIncrement: true }).notNull(),
  name: DrizzleSQL.text("uname").notNull().unique(),
  secondFAKey: DrizzleSQL.text("2fa_key").notNull().unique(),
});
