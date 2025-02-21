import { useEffect, useState } from 'react';

import { UserWithTasks } from '@/entities/UserWithTasks/lib/types';
import { User } from '@/entities/User/lib/types';
import { Todo } from '@/entities/Todo/lib/types';
import { getUsers } from '@/shared/api'; 
import { getTodos } from '@/shared/api'; 

const useUsersWithTasks = () => {
    const [usersWithTasks, setUsersWithTasks] = useState<UserWithTasks[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users: User[] = await getUsers(); 
                const todos: Todo[] = await getTodos(); 

                const usersWithTasksData: UserWithTasks[] = users.map((user) => {
                    const tasksCount = todos.filter((todo) => todo.userId === user.id).length;
                    return { ...user, tasksCount };
                });

                setUsersWithTasks(usersWithTasksData);
            } catch (error) {
                setError('Ошибка загрузки данных');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { usersWithTasks, loading, error };
};

export default useUsersWithTasks;