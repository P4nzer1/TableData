import { TableData } from '@/features/Table/ui/TableData';
import styles from './TableDataWidget.module.scss'
export const UserTableWidget = () => {
    return (
        <div>
            <h1 className={styles.h1}>Таблица пользователей</h1>
            <div className={styles.div}> User Task table for effective planning</div>
            <TableData />
        </div>
    );
};

