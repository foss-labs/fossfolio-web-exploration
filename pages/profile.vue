<script lang="ts" setup>
definePageMeta({
    title: 'Profile',
    description: 'Profile page',
    middleware: ['auth'],
    layout: 'global-layout',
    keywords: 'profile, user, account',
});

</script>

<template>
    <div class="flex border-t items-center justify-center">
        <Accounts />
    </div>
</template>

<style lang="scss" scoped>


</style>