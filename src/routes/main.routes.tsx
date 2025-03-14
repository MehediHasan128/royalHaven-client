import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/authentication/signIn/SignIn";
import SignUp from "../pages/authentication/signUp/SignUp";
import Home from "../pages/Home/Home";
import Faq from "../pages/faq/Faq";
import AboutUs from "../pages/aboutUs/AboutUs";
import Properties from "../pages/properties/Properties";
import AdminLayout from "../components/layout/AdminLayout";
import { AdminRoutes } from "./admin.routes";
import { ProtectedRoutes } from "./Protected.routes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/properties',
                element: <Properties />
            },
            {
                path: '/faqs',
                element: <Faq />
            },
            {
                path: '/aboutus',
                element: <AboutUs />
            },
        ]
    },
    {
        path: '/admin',
        element: <ProtectedRoutes><AdminLayout /></ProtectedRoutes>,
        children: AdminRoutes
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
]);


export default router;