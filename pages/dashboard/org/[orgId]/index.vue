<script lang="ts" setup>
definePageMeta({
    layout: 'global-layout',
    middleware: 'auth',
});
</script>

<template>

    {{ $route.params.orgId }}

</template>