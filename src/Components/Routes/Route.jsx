import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Review from "../../Pages/Review";
import Blogs from "../../Pages/Blogs";
import Login from "../LoginRegister/Login";
import Register from "../LoginRegister/Register";
import Information from "../../Pages/Information";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import DashboardHome from "../../Pages/DashboardPages/DashboardHome";
import AllProducts from "../../Pages/DashboardPages/AllProducts";
import AddProducts from "../../Pages/DashboardPages/AddProducts";
import EditProducts from "../../Pages/DashboardPages/EditProducts";
import PrivateRoute from "./PrivateRoute";
import DetailsProduct from "../../Pages/DashboardPages/DetailsProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/review',
                element: <Review />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/information',
                element: <Information />
            },
        ]
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashBoardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: 'DashboardHome',
                element: <DashboardHome />
            },
            {
                path: 'Manage-all-Products',
                element: <AllProducts />
            },
            {
                path: 'Add-Products',
                element: <AddProducts />
            },
            {
                path: 'Edit-products/:id',
                element: <EditProducts />
            },
            {
                path: 'Details-products/:id',
                element: <DetailsProduct />
            }
        ]
    }
]);

export default router;