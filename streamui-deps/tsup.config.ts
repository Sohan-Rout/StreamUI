import { defineConfig } from "tsup";

export default defineConfig({
  entry: [],
  format: ["esm"],
  dts: false,
  sourcemap: false,
  clean: true,
  target: "esnext",
  esbuildOptions(options) {
    options.loader = {
      ".js": "jsx",
    };
  },
});