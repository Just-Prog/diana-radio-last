// oxlint-disable typescript/no-non-null-assertion
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  out: "./migrations",
  schema: "./src/lib/db/schema.ts",
});
