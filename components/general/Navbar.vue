<script lang="ts" setup>

import Avatar from '~/components/ui/Avatar.vue';

const userStore = useUserStore();

const router = useRouter();

const { loginWithProvider, logout } = (userStore);

const { user } = toRefs(userStore);

const isOpen = ref(false);

</script>

<template>
    <div class="flex w-full px-4 py-2 justify-between">
        <div class="flex gap-8 items-center">
            <NuxtLink to="/">
                <h2 class="text-2xl font-mono">
                    FossFolio
                </h2>
            </NuxtLink>

            <div class="flex items-center gap-4">
                <NuxtLink class="text-gray-600" to="/">
                    Home
                </NuxtLink>

                <NuxtLink class="text-gray-600" to="/events">
                    Events
                </NuxtLink>

            </div>
        </div>


        <UiDropdown v-if="user" v-model:open="isOpen" placement="bottom" trigger="click">
            <Avatar :email="user.email" :name="user.display_name" :src="user.photo_url" />
            <template #overlay>
                <UiMenu class="hover:bg-white cursor-auto">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm text-gray-800 font-medium leading-none">
                            {{ user?.display_name }}
                        </p>
                        <p className="text-xs leading-none text-gray-600">
                            {{ user?.email }}
                        </p>
                    </div>
                </UiMenu>
                <UiDropdownSeparator />
                <UiMenu @click="router.push('/profile')">
                    Profile
                </UiMenu>

                <UiMenu @click="router.push('/dashboard/org')">
                    Organizer Events
                </UiMenu>
                <UiMenu>
                    My Tickets
                </UiMenu>
                <UiDropdownSeparator />
                <UiMenu @click="logout">
                    Logout
                </UiMenu>
            </template>
        </UiDropdown>

        <NuxtLink v-else to="/auth">
            <UiButton>
                Login
            </UiButton>
        </NuxtLink>


    </div>


</template>

<style lang="scss" scoped>


</style>