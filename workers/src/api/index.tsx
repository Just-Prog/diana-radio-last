import { Hono } from "hono";

import authn from "./authn";

const api = new Hono();

api.get("/health", (c) =>
  c.json({
    now: new Date().toISOString(),
    ok: true,
    service: "diana-radio-back",
  })
);

api.route("/authn", authn);

export default api;
