import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../pages/shared/navbar/Navbar";

const MainLayout = () => {

    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            {(path !== "/properties") && <Navbar />}
            <Outlet />
        </>
    );
};

export default MainLayout;