import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
    base: "https://github.com/tojaku/marulic.git",
    plugins: [
        // devtools(),
        solidPlugin(),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
