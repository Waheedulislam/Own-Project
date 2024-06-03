import { Link, Outlet, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useEffect } from "react";

const DashBoardLayout = () => {

    const [signOut] = useSignOut(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = async () => {
        const successSignOut = await signOut();
        if (successSignOut) {
            alert('Do you want to logout...?')
            toast.success('Successfully Logout')

        }
    }
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [navigate, user])
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-gray-100 p-4 w-80 flex flex-col justify-between min-h-screen bg-base-200 text-base-content">

                        <div className="bg-slate-300">
                            {/* Sidebar content here */}
                            <li><Link to={'/dashboard/DashboardHome'} >Dashboard</Link></li>
                            <li><Link to={'/dashboard/Manage-all-Products'}>Manage All Products</Link></li>
                            <li><Link to={'/dashboard/Add-Products'}>Add Products</Link></li>

                        </div>


                        {/* Logout */}
                        <div className="flex justify-center gap-28">
                            <li><Link className="btn btn-success" to={'/'}>Home</Link></li>
                            <button className="btn btn-error" onClick={handleLogOut}>
                                Log Out
                            </button>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;
