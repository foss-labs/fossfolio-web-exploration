import { useUserStore } from '~/store/user';

export default defineNuxtRouteMiddleware(async (to, from) => {

    if (process.server) return;

    const userStore = useUserStore();

    const { fetchUser } = userStore;

    const { user } = toRefs(userStore);

    await fetchUser();

    const isAuthenticated = () => {
        return user.value !== undefined && user.value !== null;
    };


    if (!isAuthenticated()) {
        return navigateTo('/auth');
    }
});

