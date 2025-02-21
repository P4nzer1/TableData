import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { User } from "@/entities/User/lib/types";
import styles from './TableDescriptions.module.scss'
export interface TableDataProps {
    usersWithTasks: User[];
}

export const TableDescriptions = ({ usersWithTasks }: TableDataProps) => {
    return (
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
    );
};