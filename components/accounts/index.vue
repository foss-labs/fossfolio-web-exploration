<script lang="js" setup>


const activeMenu = ref('profile');


const changeMenu = (menu) => {
    activeMenu.value = menu;
};

</script>

<template>
    <div class="w-full flex flex-col items-center">
        <div class="text-3xl container py-12">
            Account Settings
        </div>

        <div class="flex w-full container">
            <div class="flex flex-col gap-2 text-gray-700 pr-12 w-2/6">
                <UiMenu
                    :class="{
                    'bg-gray-100 font-medium': activeMenu === 'profile',
                }"
                    class="rounded-lg" @click="changeMenu('profile')   ">

                    <div class="flex gap-2 items-center">
                        <Icon name="uil:user" />
                        Profile
                    </div>
                </UiMenu>

                <UiMenu :class="{
                    'bg-gray-100 font-medium': activeMenu === 'settings',
                }"
                        class="rounded-lg" @click="changeMenu('settings')   "
                >
                    <div class="flex gap-2 items-center">
                        <Icon name="uil:setting" />
                        Settings
                    </div>

                </UiMenu>
            </div>

            <div class="w-4/6 flex-1">
                <AccountsProfile v-if="activeMenu === 'profile'" />
                <AccountsSettings v-else />
            </div>
        </div>

    </div>

</template>