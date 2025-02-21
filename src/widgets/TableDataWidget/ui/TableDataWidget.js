import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useUsersWithTasks from "@/features/TableData/lib/hooks/useUsersWithTasks";
import TableData from "@/features/TableData/ui/TableData";
import styles from './TableDataWidget.module.scss';
const UserTableWidget = () => {
    const { usersWithTasks, loading, error } = useUsersWithTasks();
    return (_jsxs("div", { children: [loading && _jsx("div", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." }), error && _jsx("div", { children: error }), _jsx("h1", { className: styles.h1, children: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439" }), _jsx("div", { className: styles.div, children: " User Task table for effective planning" }), _jsx(TableData, { usersWithTasks: usersWithTasks })] }));
};
export default UserTableWidget;
