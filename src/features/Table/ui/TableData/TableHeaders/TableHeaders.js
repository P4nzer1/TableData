import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from '@/shared/ui/Text';
import styles from './TableHeaders.module.scss';
export const TableHeaders = () => {
    return (_jsx("thead", { className: styles.headers, children: _jsxs("tr", { children: [_jsx(Text, { as: 'th', size: 'l', children: "\u2116" }), _jsx(Text, { as: 'th', size: 'l', children: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C" }), _jsx(Text, { as: 'th', size: 'l', children: "\u0417\u0430\u0434\u0430\u0447\u0438" })] }) }));
};
