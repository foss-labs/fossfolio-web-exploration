export const useOrgStore = defineStore('orgStore', () => {
    const api = useApi();


    const orgs = ref([]);


    const fetchOrgs = async () => {
        try {
            const data = await api.get('/org');

            orgs.value = data.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateOrg = async (data: any) => {
        try {
            await api.patch('/user', data);
            await fetchOrgs();
        } catch (error) {
            console.error(error);
        }
    };


    onMounted(fetchOrgs);
    return {
        orgs,
        fetchOrgs,
        updateOrg,
    };
});