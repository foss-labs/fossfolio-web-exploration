export const useUserStore = defineStore('userStore', () => {
    const user = ref<{
        id: string;
        email: string;
        display_name: string;
        photo_url: string;
        slug: string;
        college_name: string;
    }>();

    const api = useApi();

    const fetchUser = async () => {
        try {
            const data = await api.get('/user');

            user.value = data.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateUser = async (data: any) => {
        try {
            const updatedUser = await api.patch('/user', data);

            user.value = updatedUser.data;
        } catch (error) {
            console.error(error);
        }
    };

    const loginWithProvider = async (provider: string) => {
        window.location.href = `http://localhost:8080/api/auth/${provider}`;
    };

    const logout = async () => {
        window.location.href = `http://localhost:8080/api/auth/logout`;
        await fetchUser();
    };


    onMounted(fetchUser);
    return {
        user,
        fetchUser,
        updateUser,
        loginWithProvider,
        logout,
    };
});