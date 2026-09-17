import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import ssrPlugin from "vite-ssr-components/plugin";

import { devPorts } from "../vite.global";

export default defineConfig({
  plugins: [cloudflare(), ssrPlugin()],
  server: {
    port: devPorts.worker,
    strictPort: true,
    cors: false,
  },
});
