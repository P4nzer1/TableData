import { useEffect, useState } from 'react';

import { User } from '@/entities/User/lib/types';
import { fetchUsersTasks } from '../../api/fetchUsersTaskApi';

export const useUsersWithTasks = () => {
    const [usersWithTasks, setUsersWithTasks] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadData = async () => {
            try {
                const usersWithTasksData = await fetchUsersTasks();
                setUsersWithTasks(usersWithTasksData);
            } catch (error) {
                setError('Ошибка загрузки данных');
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return { usersWithTasks, loading, error };
};