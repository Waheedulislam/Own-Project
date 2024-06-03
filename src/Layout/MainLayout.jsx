import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="px-20">
                <Navbar></Navbar>
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;