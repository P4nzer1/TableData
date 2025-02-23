export const createApi = (baseUrl: string, endpoint?: string): string => {
    return endpoint ? `${baseUrl}/${endpoint}` : baseUrl;
};