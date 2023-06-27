import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// legacy
import legacy from "@vitejs/plugin-legacy";
import viteCompression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      // gzip静态资源压缩配置
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    legacy({
      targets: ["Chrome 70"],
      //   targets: ["defaults", "not IE 11"],
      modernPolyfills: true,
    }),
  ],

  base: "./", // index.html文件所在位置
  root: "./", // js导入的资源路径
  server: {
    // 代理
    // proxy,
    host: "0.0.0.0",

    fs: {
      strict: false,
    },
  },

  build: {
    outDir: "filePreview",
    // target: ["chrome70"],
    // cssTarget: ["chrome64"],
    minify: "esbuild", // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
    manifest: false, // 是否产出maifest.json
    sourcemap: false, // 是否产出soucemap.jso
  },
});

