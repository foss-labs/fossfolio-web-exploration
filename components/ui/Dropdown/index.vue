<script lang="ts" setup>

interface DropDownProps {
    disabled?: boolean;
    trigger?: 'click' | 'hover';
    open?: boolean;
    placement?: 'top' | 'right' | 'bottom' | 'left';
}

const emits = defineEmits(['update:open']);

const props = withDefaults(defineProps<DropDownProps>(), {
    disabled: false,
    trigger: 'click',
    open: false,
    placement: 'left',
});

const open = useVModel(props, 'open', emits);

const placement = computed(() => {
    return props.placement;
});


const onOpenChange = (value: boolean) => {
    open.value = value;
    emits('update:open', value);
};

const triggerRef = ref<HTMLElement | null>(null);

const onMouseEnter = () => {
    onOpenChange(true);
};

const onMouseLeave = () => {
    onOpenChange(false);
};

onMounted(() => {
    if (props.trigger === 'hover') {
        triggerRef.value?.addEventListener('mouseenter', onMouseEnter);
        triggerRef.value?.addEventListener('mouseleave', onMouseLeave);
    }
});

onUnmounted(() => {
    triggerRef.value?.removeEventListener('mouseenter', onMouseEnter);
    triggerRef.value?.removeEventListener('mouseleave', onMouseLeave);
});
</script>

<template>

    <DropdownMenuRoot v-model:open="open" @update:open="onOpenChange">
        <DropdownMenuTrigger :disabled="disabled">
            <div ref="triggerRef">
                <slot />
            </div>
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent :side="placement" :side-offset="5" align="end" class="bg-white rounded-md shadow-sm border w-56 p-1 DropdownMenuContent"
                                 @click="onOpenChange(false)">
                <slot name="overlay" />
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>

</template>

<style lang="scss">
.DropdownMenuContent {
    transition: all;

    &[data-state="open"] {
        @apply animate-in fade-in-0 zoom-in-95;
    }

    &[data-state="closed"] {
        @apply animate-out fade-out-0 zoom-out-95;
    }

    &[data-side="bottom"] {
        @apply slide-in-from-top-2;
    }

    &[data-side="top"] {
        @apply slide-in-from-bottom-2;
    }

    &[data-side="left"] {
        @apply slide-in-from-right-2;
    }

    &[data-side="right"] {
        @apply slide-in-from-left-2;
    }
}

</style>