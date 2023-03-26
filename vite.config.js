import { defineConfig } from "vite";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "site");

export default defineConfig({
  base: "./",
  root,
  build: {
    // Relative to the root
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        resume: resolve(root, "resume/index.html"),
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
