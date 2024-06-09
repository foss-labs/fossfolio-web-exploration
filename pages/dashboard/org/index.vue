<script lang="ts" setup>
definePageMeta({
    layout: 'global-layout',
    middleware: 'auth',
});
</script>

<template>
    <div class="flex border-t items-center justify-center">
        <LazyOrganization />
    </div>
</template>

<style lang="scss" scoped>

</style>