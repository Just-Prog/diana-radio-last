import { Hono } from "hono";
import { cors } from "hono/cors";

import api from "./api";

interface Bindings {
  ALLOWED_ORIGIN: string;
}

const app = new Hono<{ Bindings: Bindings }>();

// oxlint-disable-next-line require-await
app.use(
  "*",
  cors({
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    origin: (origin, c) => {
      const urls = c.env.ALLOWED_ORIGIN;
      if (urls === origin) {
        return origin;
      }
      return null;
    },
  })
);

app.use("/*", async (c, next) => {
  c.header("X-Powered-By", "Hono");
  c.header("X-Whoami", "Diana-Radio-Last-SelfHosted");
  c.header("X-EasterEgg", "SUBSCRIBE_DIANA_PLZ_73");
  return await next();
});

app.route("/api", api);
app.all("/", (c) =>
  c.json({
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
