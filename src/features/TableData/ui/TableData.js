import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from './TableData.module.scss';
const TableData = ({ usersWithTasks }) => {
    return (_jsx("div", { className: styles.conteiner, children: _jsxs("table", { className: styles.table, children: [_jsx("thead", { className: styles.headers, children: _jsxs("tr", { children: [_jsx("th", { children: "\u2116" }), _jsx("th", { children: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C" }), _jsx("th", { children: "\u0417\u0430\u0434\u0430\u0447\u0438" })] }) }), _jsx("tbody", { className: styles.descriptions, children: usersWithTasks.map((user, index) => (_jsxs("tr", { children: [_jsx("td", { children: index + 1 }), _jsxs("td", { className: styles.userinfo, children: [_jsx(FontAwesomeIcon, { icon: faUser, className: styles.usericon }), _jsxs("div", { className: styles.userdetails, children: [_jsx("span", { children: user.name }), _jsx("span", { className: styles.email, children: user.email })] })] }), _jsx("td", { children: user.tasksCount })] }, user.id))) })] }) }));
};
export default TableData;
