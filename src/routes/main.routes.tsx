import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/authentication/signIn/signIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/signin',
        element: <SignIn />
    }
]);


export default router;