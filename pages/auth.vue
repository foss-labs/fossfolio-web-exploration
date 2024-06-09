<script lang="ts" setup>

const userStore = useUserStore();

const { loginWithProvider } = (userStore);

</script>


<template>
    <div class="h-[100svh] w-full flex flex-col items-center gap-4 justify-center">
        <h1 class="text-3xl text-gray-800 font-semibold">FossFolio</h1>
        <p class="text-gray-600 text-center px-4">
            Discover, host and manage events all in one place.
        </p>

        <div class="flex flex-col sm:flex-row gap-2">
            <UiButton
                variant="secondary"
                @click="loginWithProvider('google')">

                <Icon name="uil:google" />
                Login with Google
            </UiButton>
            <UiButton
                variant="secondary"
                @click="loginWithProvider('github')">

                <Icon name="uil:github" />
                Login with Github
            </UiButton>
        </div>
    </div>
</template>