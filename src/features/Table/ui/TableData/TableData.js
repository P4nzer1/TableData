import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTasks } from "../../lib";
import { TableHeaders } from "./TableHeaders";
import { TableBody } from "./TableBody";
import styles from './TableData.module.scss';
export const TableData = () => {
    const { tasks, loading, error } = useTasks();
    if (error)
        return error;
    if (loading)
        return loading;
    return (_jsx("div", { className: styles.conteiner, children: _jsxs("table", { className: styles.table, children: [_jsx(TableHeaders, {}), _jsx(TableBody, { usersWithTasks: tasks })] }) }));
};
