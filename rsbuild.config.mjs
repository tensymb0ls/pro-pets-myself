import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import image from "@rollup/plugin-image";

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: "build",
    },
  },
  html: {
    template: "./static/index.html",
    favicon: "./src/assets/favicon.ico",
  },
});
