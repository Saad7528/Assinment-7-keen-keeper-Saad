import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import HomePage from "../Component/HomePage/HomePage";
import TimeLine from "../Component/TimeLine/TimeLine";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/timeline",
                element: <TimeLine/>
            }
        ]
    }
])