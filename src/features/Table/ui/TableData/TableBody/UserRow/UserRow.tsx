import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { User } from "@/entities/User";
import { Text } from "@/shared/ui/Text";
import styles from './UserRow.module.scss'

interface UserRowProps {
  user: User;
  index: number;
}

const UserRow = ({ user, index }: UserRowProps) => {
  return (
    <tr key={user.id}>
      <Text as="td" size="m" className={styles.usernum} weigh='700'>{index + 1}</Text>
      <Text as="td" className={styles.userinfo}>
        <FontAwesomeIcon icon={faUser} className={styles.usericon} />
        <div className={styles.userdetails}>
          <Text size="m">{user.name}</Text>
          <Text color="grey" className={styles.email}>{user.email}</Text>
        </div>
      </Text>
      <Text as="td" size="m" className={styles.usertasks} weigh='500'>{user.tasks}</Text>
    </tr>
  );
};

export default UserRow;