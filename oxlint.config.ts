import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import drizzle from "ultracite/oxlint/drizzle";
import react from "ultracite/oxlint/react";
import remix from "ultracite/oxlint/remix";

export default defineConfig({
  env: core.env,
  extends: [core, react, remix, drizzle],
  ignorePatterns: core.ignorePatterns,
  options: { typeAware: false },
});
