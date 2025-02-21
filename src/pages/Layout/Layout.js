import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (_jsx("div", { children: _jsx(Outlet, {}) }));
};
export default Layout;
