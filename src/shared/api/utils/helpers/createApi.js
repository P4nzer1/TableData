export const createApi = (baseUrl, endpoint) => {
    return endpoint ? `${baseUrl}/${endpoint}` : baseUrl;
};
