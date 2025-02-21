import styles from './TableHeaders.module.scss'

export const TableHeaders = () => {
    return (

        <thead className={styles.headers}>
            <tr>
                <th>№</th>
                <th>Пользователь</th>
                <th>Задачи</th>
            </tr>
        </thead>
    )
};