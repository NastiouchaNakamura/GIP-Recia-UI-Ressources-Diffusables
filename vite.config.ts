import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-ce"),
        },
      },
    }),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/ui-ressources-gar-[name].[ext]",
        entryFileNames: "assets/ui-ressources-gar-[name].js",
        chunkFileNames: "assets/ui-ressources-gar-[name].js",
      },
    },
  },
});
