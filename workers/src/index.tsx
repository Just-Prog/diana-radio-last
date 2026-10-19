import { Hono, HonoRequest } from "hono";
import { cors } from "hono/cors";

import api from "./api";

const app = new Hono();

app.use(
  "/*",
  cors({
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    origin: [
      "http://localhost:3077",
      "http://127.0.0.1:3077",
      "https://diana-radio-last.asoulofficial.cn.eu.org",
    ],
  })
);

app.route("/api", api);

app.all("/*", (c) => c.redirect("https://space.bilibili.com/672328094/"));

export default app;
