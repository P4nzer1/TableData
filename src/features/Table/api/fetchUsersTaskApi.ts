import { User } from '@/entities/User/lib/types';
import { Todo } from '@/entities/Todo/lib/types';
import { getUsers } from '@/shared/api';
import { getTodos } from '@/shared/api';

export const fetchUsersTasks = async (): Promise<User[]> => {
    try {
        const users: User[] = await getUsers();
        const todos: Todo[] = await getTodos();

        return users.map((user) => {
            const tasksCount = todos.filter((todo) => todo.userId === user.id).length;
            return { ...user, tasksCount };
        });
    } catch (error) {
        throw new Error('Ошибка загрузки данных');
    }
};
