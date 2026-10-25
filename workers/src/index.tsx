import { Hono, HonoRequest } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";

import api from "./api";

const app = new Hono();

app.use(
  "/*",
  cors({
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    origin: JSON.parse(import.meta.env.VITE_ALLOWED_ORIGINS),
  })
);

app.use("/*", async (c, next) => {
  c.header("X-Powered-By", "Hono");
  c.header("X-Whoami", "Diana-Radio-Last-SelfHosted");
  return await next();
});

app.route("/api", api);
app.all("/", (c) =>
  c.json({
    // c_time: new Date(),
    env: import.meta.env.DEV ? "dev" : "prod",
    greeting: "worker_backend",
    love_from: "diana",
    sweetest: "strawberry",
  })
);

app.notFound((c) => {
  if (import.meta.env.PROD) {
    return c.redirect("https://space.bilibili.com/672328094");
  }
  return c.json({ msg: "You spelled it WRONG." });
});

export default app;
