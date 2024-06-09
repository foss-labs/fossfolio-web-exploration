<script lang="ts" setup>

import { z } from 'zod';

const userStore = useUserStore();

const { user: user } = toRefs(userStore);

const { updateUser } = userStore;

const validationSchema = z.object({
    display_name: z.string().min(3).max(255),
    slug: z.string().min(3).max(255),
    college_name: z.string().min(3).max(255).optional(),
});

const {
    handleSubmit,
    errors,
    fields,
} = useTypedForm(user.value ?? {}, validationSchema);

const isLoading = ref(false);

const onSubmit = handleSubmit(async (values) => {
    isLoading.value = true;
    await updateUser(values);
    isLoading.value = false;
});

</script>

<template>
    <form class="flex gap-3 flex-col" @submit="onSubmit">
        <UiAvatar :email="user?.email" :name="user?.display_name" :src="user?.photo_url" size="lg" />

        <div class="space-y-1">
            <label class="text-gray-500 font-medium text-sm" for="is_student">Full Name</label>
            <UiInput v-model="fields.display_name.value" name="display_name" placeholder="Enter your name"
                     type="text" />
            <span class="text-red-500 text-sm">{{ errors?.display_name }}</span>
        </div>

        <div class="space-y-1">
            <label class="text-gray-500 font-medium text-sm" for="is_student">Slug (This will help us to uniquely
                identify
                you)</label>
            <UiInput v-model="fields.slug.value" name="slug" placeholder="Slug" />
            <span class="text-red-500 text-sm">{{ errors?.slug }}</span>
        </div>

        <div class="space-y-1">
            <label class="text-gray-500 font-medium text-sm" for="is_student">Your College Name</label>
            <UiInput v-model="fields.college_name.value" name="college_name" placeholder="College Name"
                     type="text" />
            <span class="text-red-500 text-sm">{{ errors?.college_name }}</span>
        </div>

        <div class="flex justify-end w-full">
            <UiButton :loading="isLoading" type="submit" variant="secondary">Save</UiButton>

        </div>
    </form>

</template>

<style lang="scss" scoped>

</style>