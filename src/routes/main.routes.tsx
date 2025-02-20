import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/authentication/signIn/SignIn";
import SignUp from "../pages/authentication/signUp/SignUp";
import Home from "../pages/Home/Home";
import Properties from "../pages/properties/properties";

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
        ]
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