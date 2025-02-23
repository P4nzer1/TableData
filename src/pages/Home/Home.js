import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TableData } from "@/features/Table/ui/TableData";
import styles from './Home.module.scss';
import { Text } from "@/shared/ui/Text";
export const Home = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Text, { className: styles.h1, as: "h1", size: "xl", children: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439" }), _jsx(Text, { className: styles.p, color: "grey", size: "m", children: "User Task table for effective planning" }), _jsx(TableData, {})] }));
};
export default Home;
