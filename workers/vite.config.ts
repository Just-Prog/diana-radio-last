import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import ssrPlugin from "vite-ssr-components/plugin";

const projectTempDirectory = fileURLToPath(new URL("../.tmp", import.meta.url));

// 我是真的不知道为什么Miniflare就是死活没权限不能用默认临时目录
// 神了
mkdirSync(projectTempDirectory, { recursive: true });
process.env.TEMP = projectTempDirectory;
process.env.TMP = projectTempDirectory;
process.env.TMPDIR = projectTempDirectory;

export default defineConfig({
  plugins: [cloudflare(), ssrPlugin()],
  server: {
    port: 3777,
  },
});
