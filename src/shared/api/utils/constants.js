export const BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const createApi = (baseUrl, endpoint) => {
    return endpoint ? `${baseUrl}/${endpoint}` : baseUrl;
};
export const TODOS_URL = createApi(BASE_URL, 'todos');
export const USERS_URL = createApi(BASE_URL, 'users');
