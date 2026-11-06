import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";

import { users, users as usersSchema } from "../lib/db/schema";

interface Bindings {
  DB: D1Database;
}

interface Variables {
  db: ReturnType<typeof drizzle>;
}

const userRoutes = new Hono<{ Bindings: Bindings; Variables: Variables }>();

userRoutes.use("/*", async (c, next) => {
  const db = drizzle(c.env.DB, { schema: { users: usersSchema } });
  c.set("db", db);
  // oxlint-disable-next-line node/callback-return
  await next();
});

userRoutes.post("/register", async (c) => {
  const { name, email } = await c.req.json();
  const db = c.get("db");
  try {
    // 二步验证后面再弄
    await db.insert(users).values({ email, name });
  } catch (error) {
    return c.json({ code: -1, msg: (error as Error).message });
  }
  return c.json({ code: 0, msg: "ok" });
});

export default userRoutes;
