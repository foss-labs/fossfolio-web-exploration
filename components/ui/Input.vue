<script lang="ts" setup>

interface InputProps {
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    fullWidth?: boolean;
    placeholder?: string;
    type?: HTMLInputElement['type'];
    prefixIcon?: string;
    postIcon?: string;
    modelValue: string;
}

const emits = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
    size: 'md',
    type: 'text',
    fullWidth: false,
    modelValue: '',
});

const value = useVModel(props, 'modelValue', emits);

</script>

<template>
    <div :class="{
        'sm': size === 'sm',
        'md': size === 'md',
        'lg': size === 'lg',
    }" class="flex items-center gap-2 input-wrapper">

        <Icon v-if="prefixIcon" :class="{
            'w-4 h-4': size === 'sm',
            'w-6 h-6': size === 'md',
            'w-8 h-8': size === 'lg',

        }" :name="prefixIcon" class="text-gray-600" />

        <input
            v-model="value"
            :disabled="disabled"
            :placeholder="placeholder"
            :type="type" />

        <Icon v-if="postIcon" :class="{
            'w-4 h-4': size === 'sm',
            'w-6 h-6': size === 'md',
            'w-8 h-8': size === 'lg',

        }" :name="postIcon" class="text-gray-600" />

    </div>

</template>


<style lang="scss" scoped>

.input-wrapper {
    @apply border rounded-md border-gray-200 shadow-sm hover:bg-gray-50 transition-all;

    &.sm {
        @apply px-2 py-1 text-sm rounded-md;
    }

    &.md {
        @apply px-4 py-2 text-base rounded-lg;
    }

    &.lg {
        @apply px-6 py-3 text-lg rounded-xl;
    }

}


input {
    @apply focus:outline-none text-gray-600 bg-transparent focus-visible:outline-none w-full;
}


</style>