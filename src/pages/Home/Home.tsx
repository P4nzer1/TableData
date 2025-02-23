import { TableData } from "@/features/Table/ui/TableData";
import styles from './Home.module.scss'
import { Text } from "@/shared/ui/Text";

export const Home = () => {
    return (
        <>
            <Text className={styles.h1} as="h1" size="xl">Таблица пользователей</Text>
            <Text className={styles.p} color="grey" size="m">User Task table for effective planning</Text>
            <TableData />
        </>
    );
};

export default Home;