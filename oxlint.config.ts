import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import drizzle from "ultracite/oxlint/drizzle";
import react from "ultracite/oxlint/react";
import remix from "ultracite/oxlint/remix";

export default defineConfig({
  env: core.env,
  extends: [core, react, remix, drizzle],
  ignorePatterns: [
    ...core.ignorePatterns,
    // React Router 的类型生成目录
    "**/.react-router",
    // AI 工具配置与第三方 skill 文稿
    "**/.agents",
    "**/.claude",
    "**/.codex",
  ],
  options: { typeAware: false },
});
