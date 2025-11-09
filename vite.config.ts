import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer({
      // Optimiser PNG
      png: {
        quality: 80,
      },
      // Optimiser JPEG
      jpeg: {
        quality: 80,
      },
      // Optimiser JPG
      jpg: {
        quality: 80,
      },
      // Générer WebP
      webp: {
        quality: 80,
      },
      // Optimiser SVG
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // S'assurer que les assets sont correctement gérés
    assetsDir: "assets",
    // Optimisation du bundle pour de meilleures performances
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les vendors pour un meilleur caching
          vendor: ["react", "react-dom", "react-router-dom"],
          i18n: ["i18next", "react-i18next"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-navigation-menu"],
        },
      },
    },
  },
}));
