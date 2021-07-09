import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    reactRefresh(),
    svgr(),
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
    ],
  },
});
