<script lang="ts" setup>

interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
}


withDefaults(defineProps<ButtonProps>(), {
    size: 'md',
    variant: 'primary',
});

</script>

<template>
    <button :class="{
        'primary': variant === 'primary',
        'secondary': variant === 'secondary',
        'danger': variant === 'danger',
        'sm': size === 'sm',
        'md': size === 'md',
        'lg': size === 'lg',
        'full-width': fullWidth,
    }" :disabled="disabled || loading">
        <div class="flex items-center gap-1 justify-center">

            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">

                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />

                <path class="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor" />
            </svg>
            <slot />
        </div>
    </button>
</template>

<style lang="scss" scoped>

button {

    @apply transition-all;

    &.full-width {
        @apply w-full;
    }

    &.sm {
        @apply px-2 py-1 text-sm rounded-md;
    }

    &.md {
        @apply px-4 py-2 text-base rounded-lg;
    }

    &.lg {
        @apply px-6 py-3 text-lg  rounded-lg;
    }


    &.secondary {
        @apply bg-gray-50 text-gray-800 border border-gray-200;

        &:hover {
            @apply bg-gray-100;
        }
    }

    &.primary {
        @apply bg-fuchsia-500 text-white;

        &:hover {
            @apply bg-fuchsia-600;
        }
    }

    &.danger {
        @apply bg-red-500 text-white;
        &:hover {
            @apply bg-red-600;
        }
    }

    &:disabled {
        @apply cursor-not-allowed opacity-50;
    }
}

</style>