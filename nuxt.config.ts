// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
    ],
    tailwindcss: {
        exposeConfig: true,
        config: {
            content: [
                '~/components/**/*.{html,vue,js,ts,jsx,tsx}',
            ],
        },
    },
    headlessui: {
        prefix: '',
    },
    components: {
        dirs: [
            {
                path: '~/components/global',
                global: true,
                pathPrefix: false,
            },
            {
                path: '~/components',
                pathPrefix: false,
            },
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
