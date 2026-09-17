import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import tailwindcss from "@tailwindcss/vite";

import { devPorts, workerOrigin } from "./vite.global";

export default defineConfig({
  plugins: [devtools(), solidPlugin(), tailwindcss()],
  server: {
    port: devPorts.web,
    strictPort: true,
    proxy: {
      "/api": {
        target: workerOrigin,
        changeOrigin: true,
      },
    },
  },
  build: {
    target: "esnext",
  },
});
