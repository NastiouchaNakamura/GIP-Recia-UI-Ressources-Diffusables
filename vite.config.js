import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    vueI18n({
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
  assetsDir: "vue-ui/",
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: "[name]-[local]",
        },
        localsConvention: "camelCaseOnly",
      },
    },
  },
});
