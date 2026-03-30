import { reactRouter } from "@react-router/dev/vite";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./app/shared"),
      "@widgets": path.resolve(__dirname, "./app/widgets"),
      "@pages": path.resolve(__dirname, "./app/pages"),
    },
  },
});
