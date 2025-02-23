import { User } from '@/entities/User';
import { Todo } from '@/entities/Todo';
import { getUsers, getTodos } from '@/shared/api';

export const fetchTasksApi = async () => {
    try {
        const users: User[] = await getUsers();
        const todos: Todo[] = await getTodos();

        return users.map((user) => {
            const tasks = todos.reduce((count, todo) => todo.userId === user.id ? count + 1 : count, 0);
            return { ...user, tasks };
        });        
    } catch (error) {
        throw new Error('Ошибка загрузки данных');
    }
};
