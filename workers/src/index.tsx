import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.render(<h1>Hello!</h1>));

export default app;
