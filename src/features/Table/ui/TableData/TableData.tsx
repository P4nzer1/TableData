import { useTasks } from "../../lib";
import { TableHeaders } from "./TableHeaders";
import { TableBody } from "./TableBody";
import styles from './TableData.module.scss'

export const TableData = () => {
    const {tasks, loading, error } = useTasks();
    if(error) return error;
    if(loading) return loading;
    
    return (
        <div className={styles.conteiner}>
            <table className={styles.table}>
                <TableHeaders />
                <TableBody usersWithTasks={tasks} />
            </table>
        </div>
    );
};
