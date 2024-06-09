<script lang="ts" setup>

interface AvatarProps {
    size?: 'sm' | 'md' | 'lg';
    name?: string;
    email?: string;
    src?: string;
}


withDefaults(defineProps<AvatarProps>(), {
    size: 'md',
});

</script>

<template>
    <AvatarRoot>
        <AvatarImage v-if="src" :alt="name ?? email" :class="{
            'sm': size === 'sm',
            'md': size === 'md',
            'lg': size === 'lg',
        }" :src="src" class="rounded-full avatar" />
        <AvatarFallback v-else :class="{
            'sm': size === 'sm',
            'md': size === 'md',
            'lg': size === 'lg',
        }" class="rounded-md bg-yellow-200 px-2 py-2 avatar">
            {{
                name ? name.substring(0, 2).toUpperCase() : email?.substring(0, 2).toUpperCase()
            }}
        </AvatarFallback>
    </AvatarRoot>
</template>

<style lang="scss" scoped>

.avatar {
    @apply rounded-full;
    &.sm {
        @apply w-10 h-10;
    }

    &.md {
        @apply w-12 h-12;
    }

    &.lg {
        @apply w-16 h-16;
    }
}

</style>