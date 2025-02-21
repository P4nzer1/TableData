import { handleAxiosError } from '@/shared/api/';
import { axiosInstance, USERS_URL } from '@/shared/api/';
export const getUsers = async () => {
    try {
        const response = await axiosInstance.get(USERS_URL);
        return response.data;
    }
    catch (error) {
        throw handleAxiosError(error);
    }
};
