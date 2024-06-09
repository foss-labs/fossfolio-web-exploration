<script lang="ts" setup>

import { useUserStore } from '~/store/user';
import { toRefs } from 'vue';

const userStore = useUserStore();

const { user } = toRefs(userStore);


definePageMeta({
    layout: 'global-layout',
});

</script>

<template>
    <div>
      <pre class="text-black">
        {{ user }}
      </pre>
    </div>
</template>
