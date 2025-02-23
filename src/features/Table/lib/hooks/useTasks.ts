import { useEffect, useState } from 'react';

import { User } from '@/entities/User';
import { fetchTasksApi } from '../../api';

export const useTasks = () => {
    const [tasks, setTasks] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        const loadData = async () => {
            try {
                const tasksData = await fetchTasksApi();
                setTasks(tasksData);
            } catch (error) {
                setError('Ошибка загрузки данных');
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return { tasks, loading, error };
};