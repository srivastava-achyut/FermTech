import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    {
      name: "fermtech-jsx-in-js",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;
        return transformWithEsbuild(code, id, { loader: "jsx", jsx: "automatic" });
      }
    },
    react({ include: "**/*.{js,jsx,ts,tsx}" })
  ],
  server: {
    port: 5173
  },
  preview: {
    port: 4173
  }
});
