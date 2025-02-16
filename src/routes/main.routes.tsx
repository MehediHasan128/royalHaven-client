import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/authentication/signIn/SignIn";
import SignUp from "../pages/authentication/signUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
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