import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element:<HomePage />,
            },
            {
                path: "/timeline",
                element:<Timeline />,
            },
            {
                path: "/stats",
                element: <Stats></Stats>
            }
        ],
        errorElement:<ErrorPage />
    },
]);