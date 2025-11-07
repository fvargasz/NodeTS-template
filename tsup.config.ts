import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true, // Generate .d.ts files
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: false, // Set to true for production
    target: 'es2022',
    outDir: 'dist',
    // Handle path aliases
    esbuildOptions(options) {
        options.alias = {
            '@': './src',
            '@config': './src/config',
            '@routes': './src/routes',
            '@controllers': './src/controllers',
            '@services': './src/services',
            '@middleware': './src/middleware',
            '@models': './src/models',
            '@utils': './src/utils',
        };
    },
});