import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { UserWithTasks } from "@/entities/UserWithTasks/lib/types";
import styles from './TableData.module.scss'

export interface TableDataProps {
    usersWithTasks: UserWithTasks[];
}

const TableData = ({ usersWithTasks }: TableDataProps) => {
    return (
        <div className={styles.conteiner}>
            <table className={styles.table}>
                <thead className={styles.headers}>
                    <tr>
                        <th>№</th>
                        <th>Пользователь</th>
                        <th>Задачи</th>
                    </tr>
                </thead>
                <tbody className={styles.descriptions}>
                    {usersWithTasks.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td className={styles.userinfo}>
                                <FontAwesomeIcon icon={faUser} className={styles.usericon} />
                                <div className={styles.userdetails}>
                                    <span>{user.name}</span>
                                    <span className={styles.email}>{user.email}</span>
                                </div>
                            </td>
                            <td>{user.tasksCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;
