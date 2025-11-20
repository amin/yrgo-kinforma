import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  css: {
    devSourcemap: true, // this one
  },
  plugins: [
    injectHTML({
      tagName: "include", // Use <include> instead of <load>
      sourceAttr: "file", // Use file="" instead of src=""
      debug: {
        logPath: true, // Enable debug logging
      },
    }),
  ],
});
