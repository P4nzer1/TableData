import { User } from "@/entities/User";
import UserRow from "./UserRow/UserRow";
import styles from './TableBody.module.scss'

export interface TableDataProps {
    usersWithTasks: User[];
}

export const TableBody = ({ usersWithTasks }: TableDataProps) => {
    return (
        <tbody>
            {usersWithTasks.map((user, index) => (
                <UserRow user={user} index={index}/>
            ))}
        </tbody>
    );
};