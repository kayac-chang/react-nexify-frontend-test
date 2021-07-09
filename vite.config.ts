import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactSvgPlugin from "vite-plugin-svg-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    reactSvgPlugin({
      useSVGO: true,
    }),
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
