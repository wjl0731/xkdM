import { defineConfig } from 'vite'
import path, { resolve } from "path";
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
    mode: "development",
    server: {
        port: 8081,
        open: true,
    },
    resolve: {
        alias: {
            "@":path.resolve(__dirname,'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/style/common.scss";`,
            },
        },
    },
    plugins: [
        uni(),
    ],
})
