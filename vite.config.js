import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "public");

export default defineConfig({
  root,
  build: {
    // Relative to the root
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        resume: resolve(root, "resume-viewer.html"),
      },
    },
  },
});
