// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        exposeConfig: true,
        config: {
            content: [
                '~/components/**/*.{html,vue,ts}',
            ],
        },
    },
    components: {
        dirs: [
            {
                path: '~/components/global',
                global: true,
                pathPrefix: false,
            },
            '~/components',
        ],
    },
    css: [
        'maz-ui/css/main.css',
        // '@/css/path_to_your_main_file.css',
    ],
    build: {
        transpile: ['maz-ui'],
    },
    imports: {
        dirs: [
            'composables/**',
        ],
    },
});
