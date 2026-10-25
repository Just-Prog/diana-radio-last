import tailwindcss from "@tailwindcss/vite";
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

import { devPorts, workerOrigin } from "./vite.global";

export default defineConfig({
  build: {
    target: "esnext",
  },

  plugins: [devtools(), solidPlugin(), tailwindcss()],
  server: {
    port: devPorts.web,
    proxy: {
      "/api": {
        changeOrigin: true,
        target: workerOrigin,
      },
    },
    strictPort: true,
  },
});
