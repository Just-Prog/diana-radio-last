import { Hono } from "hono";

interface Bindings {
  PUBLIC_KEY: string;
}

const authn = new Hono<{ Bindings: Bindings }>();

authn.post("/add", (c) =>
  c.json({
    placeholder: "gagagugu",
  })
);

authn.post("/auth", (c) =>
  c.json({
    placeholder: "gugugaga",
  })
);

export default authn;
