import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Components/Shared/ErrorPage/ErrorPage";

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
                path:"/all",
                element:"this is all",
            },
        ],
        errorElement:<ErrorPage />
    },
]);