import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../pages/shared/navbar/Navbar";
import Footer from "../../pages/shared/footer/Footer";

const MainLayout = () => {

    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            {(path !== "/properties") && <Navbar />}
            <Outlet />
            {(path !== "/properties") && <Footer />}
        </>
    );
};

export default MainLayout;