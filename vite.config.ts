import { defineConfig } from "vite";
import "vite/modulepreload-polyfill";

// https://vitejs.dev/config/
// vite.config.js
export default defineConfig({
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: "/path/to/main.js",
    },
  },
});
