import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Ensures "src" is properly resolved
    },
  },
  build: {
    rollupOptions: {
      input: "./index.html", // Ensure Vite knows where to start
    },
  },
});
