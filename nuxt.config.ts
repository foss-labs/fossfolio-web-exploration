// https://nuxt.com/docs/api/configuration/nuxt-config

const tailwindcssAnimate = require('tailwindcss-animate');


export default defineNuxtConfig({
    devtools: {
      enabled: true,

      timeline: {
        enabled: true,
      },
    },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        'nuxt-icon',
        'radix-vue/nuxt',
        '@vee-validate/nuxt',
    ],

    imports: {
        dirs: ['store'],
    },
    tailwindcss: {
        configPath: 'tailwind.config.js',
    },

    veeValidate: {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
            Form: 'VeeForm',
            Field: 'VeeField',
            FieldArray: 'VeeFieldArray',
            ErrorMessage: 'VeeErrorMessage',
        },
    },
});