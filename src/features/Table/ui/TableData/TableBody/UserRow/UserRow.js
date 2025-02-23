import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@/shared/ui/Text";
import styles from './UserRow.module.scss';
const UserRow = ({ user, index }) => {
    return (_jsxs("tr", { children: [_jsx(Text, { as: "td", size: "m", className: styles.usernum, weigh: '700', children: index + 1 }), _jsxs(Text, { as: "td", className: styles.userinfo, children: [_jsx(FontAwesomeIcon, { icon: faUser, className: styles.usericon }), _jsxs("div", { className: styles.userdetails, children: [_jsx(Text, { size: "m", children: user.name }), _jsx(Text, { color: "grey", className: styles.email, children: user.email })] })] }), _jsx(Text, { as: "td", size: "m", className: styles.usertasks, weigh: '500', children: user.tasks })] }, user.id));
};
export default UserRow;
