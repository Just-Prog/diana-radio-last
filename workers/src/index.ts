import { Hono } from "hono";

import userRoutes from "./routes/users";

const app = new Hono();

app.get("/", (c) =>
  c.json({
    ok: true,
  })
);

app.route("/user", userRoutes);

export default app;
