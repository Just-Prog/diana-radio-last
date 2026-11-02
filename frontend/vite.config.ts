import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const API_ORIGIN = process.env.API_ORIGIN ?? "http://localhost:3777";
const WEB_PORT = Number(process.env.WEB_PORT ?? 3077);

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: WEB_PORT,
    proxy: {
      "/api": {
        changeOrigin: true,
        target: API_ORIGIN,
      },
    },
    strictPort: true,
  },
});
