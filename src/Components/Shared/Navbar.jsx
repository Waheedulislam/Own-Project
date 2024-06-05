import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { toast } from "react-toastify";

const Navbar = () => {

    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    // signOut 
    const handleSignOut = () => {
        const successSignOut = signOut();
        if (successSignOut) {
            alert('Do you want to logout...?')
            toast.success('Successfully Logout')

        }
    }
    return (
        <div >
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/review'}>Review</Link></li>
                            <li><Link to={'/blogs'}>Blogs</Link></li>
                        </ul>
                    </div>
                    <a className=" lg:text-3xl sm:pr-4 font-bold text-blue-950">Bike Warehouse</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className="text-blue-950 font-bold" to={'/'}>Home</Link></li>
                        <li><Link className="text-blue-950 font-bold" to={'/information'}>Information</Link></li>
                        <li><Link className="text-blue-950 font-bold" to={'/about'}>About</Link></li>
                        <li><Link className="text-blue-950 font-bold" to={'/review'}>Review</Link></li>
                        <li><Link className="text-blue-950 font-bold" to={'/blogs'}>Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end ml-16 gap-2">
                    {!user?.email ?
                        <>
                            <Link to={'/login'} className="btn btn-outline bg-blue-950 font-bold text-white">Login</Link>
                            <Link to={'/register'} className='btn btn-outline bg-blue-950 font-bold text-white'>Register</Link>
                        </> :
                        <>
                            <div className="flex gap-4 justify-center">
                                <Link to={'/dashboard'} className="btn btn-neutral text-white">DashBoard</Link>

                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL || '../../../public/user-profile-icon-free-vector.jpg'} />
                                    </div>
                                </div>
                                <button className="btn btn-error text-white" onClick={handleSignOut}>Log Out</button>
                            </div>


                        </>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;