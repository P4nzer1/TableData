import { jsx as _jsx } from "react/jsx-runtime";
import UserRow from "./UserRow/UserRow";
export const TableBody = ({ usersWithTasks }) => {
    return (_jsx("tbody", { children: usersWithTasks.map((user, index) => (_jsx(UserRow, { user: user, index: index }))) }));
};
