import { Hono } from "hono";
const api = new Hono();

api.get("/health", (c) =>
  c.json({
    ok: true,
    service: "diana-radio-back",
    now: new Date().toISOString(),
  }),
);

export default api;
