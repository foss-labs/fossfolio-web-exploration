<script lang="ts" setup>

const userStore = useUserStore();

const { user } = toRefs(userStore);

const orgsStore = useOrgStore();

const { orgs } = toRefs(orgsStore);

</script>

<template>
    <div class="w-full flex flex-col items-center">
        <div class="container flex items-center py-4 justify-between w-full">
            <h1 class="text-3xl font-semibold">
                {{ user?.display_name }}'s Organizations
            </h1>

            <UiButton variant="secondary">
                Create Organization
            </UiButton>
        </div>

        <div class="container w-full">
            <NuxtLink v-for="org in orgs" :key="org.id" :href="`/dashboard/org/${org.id}`" class="block !w-96">
                <div
                    class="border hover:bg-gray-50 cursor-pointer gap-2  h-36 w-96 shadow-sm border-gray-200 px-3 py-6 transition-all rounded-md">
                    <h1 class="text-lg text-gray-800 font-medium">
                        {{ org.name }}
                    </h1>
                    <span class="line-clamp-2 mt-2 select-none text-gray-600 text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </span>


                </div>
            </NuxtLink>

        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>