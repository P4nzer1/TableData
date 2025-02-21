import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout/Layout";
import HomeLazy from "@/pages/Home/Home.lazy";
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Layout, {}),
        children: [
            {
                index: true,
                element: _jsx(HomeLazy, {}),
            },
        ],
    },
], {
    basename: "/TableData",
});
export default router;
