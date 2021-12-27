import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
//Auto inmport components
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [vue(), Components()],
});
