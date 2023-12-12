import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "./view/Dashboard.jsx";
import Surveys from "./view/Surveys.jsx";
import Login from "./view/Login.jsx";
import Signup from "./view/Signup.jsx";
import GuestLayout from "./component/GuestLayout.jsx";
import DefaultLayout from "./component/DefaultLayout.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/surveys", element: <Surveys /> },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
        ],
    },
]);

export default router;
