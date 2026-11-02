import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  ignorePatterns: [
    ...ultracite.ignorePatterns,
    // React Router 的类型生成目录
    "**/.react-router",
    // AI 工具配置与第三方 skill 文稿
    "**/.agents",
    "**/.claude",
    "**/.codex",
  ],
});
