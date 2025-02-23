import { Text } from '@/shared/ui/Text';
import styles from './TableHeaders.module.scss'

export const TableHeaders = () => {
    return (

        <thead className={styles.headers}>
            <tr>
                <Text as='th' size='l'>№</Text>
                <Text as='th' size='l'>Пользователь</Text>
                <Text as='th' size='l'>Задачи</Text>
            </tr>
        </thead>
    )
};