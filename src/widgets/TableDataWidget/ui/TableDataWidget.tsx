import useUsersWithTasks from "@/features/TableData/lib/hooks/useUsersWithTasks";
import TableData from "@/features/TableData/ui/TableData";
import styles from './TableDataWidget.module.scss'
const UserTableWidget = () => {
    const { usersWithTasks, loading, error } = useUsersWithTasks();
    
    return (
        <div>
            {loading && <div>Загрузка...</div>}
            {error && <div>{error}</div>}
            <h1 className={styles.h1}>Таблица пользователей</h1>
            <div className={styles.div}> User Task table for effective planning</div>
            <TableData usersWithTasks={usersWithTasks} />
        </div>
    );
};

export default UserTableWidget;
