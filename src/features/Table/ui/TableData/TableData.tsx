import { TableHeaders } from "../TableHeaders";
import { TableDescriptions } from "../TableDescriptions";
import { useUsersWithTasks } from "../../lib";
import styles from './TableData.module.scss'

export const TableData = () => {
    const { usersWithTasks, loading, error } = useUsersWithTasks();

    return (
        <div className={styles.conteiner}>
            {loading && <div>Загрузка...</div>}
            {error && <div>{error}</div>}
            <table className={styles.table}>
                <TableHeaders />
                <TableDescriptions usersWithTasks={usersWithTasks} />
            </table>
        </div>
    );
};
