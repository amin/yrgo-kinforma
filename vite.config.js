import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  root: "src",
  base: "./",

  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },

  css: {
    devSourcemap: true,
  },
  plugins: [
    injectHTML({
      tagName: "include",
      sourceAttr: "file",
      debug: {
        logPath: false,
      },
    }),
  ],
});
