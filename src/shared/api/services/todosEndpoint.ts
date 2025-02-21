import { handleAxiosError } from '@/shared/api/';
import { axiosInstance, TODOS_URL } from '@/shared/api/';

export const getTodos = async () => {
    try {
        const response = await axiosInstance.get(TODOS_URL);
        return response.data;
    } catch (error) {
        throw handleAxiosError(error);
    }
};