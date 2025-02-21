import { useEffect, useState } from 'react';
import { getUsers } from '@/shared/api';
import { getTodos } from '@/shared/api';
const useUsersWithTasks = () => {
    const [usersWithTasks, setUsersWithTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await getUsers();
                const todos = await getTodos();
                const usersWithTasksData = users.map((user) => {
                    const tasksCount = todos.filter((todo) => todo.userId === user.id).length;
                    return { ...user, tasksCount };
                });
                setUsersWithTasks(usersWithTasksData);
            }
            catch (error) {
                setError('Ошибка загрузки данных');
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return { usersWithTasks, loading, error };
};
export default useUsersWithTasks;
