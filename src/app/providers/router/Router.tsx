import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/pages/Layout";
import HomeLazy from "@/pages/Home/Home.lazy";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomeLazy />,
                },
            ],
        },
    ],
    {
        basename: "/TableData",
    }
);

export default router;