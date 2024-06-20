import axios from "axios";
import { useEffect, useState } from "react";
import DashboardBikeCard from "../../Components/Cards/DashboardBikeCard";
import auth from "../../Firebase/firebase.config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AllProducts = () => {
    const [bikes, setBikes] = useState();
    const [user] = useAuthState(auth)
    const [signOut] = useSignOut(auth);
    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm)

    // All product get
    useEffect(() => {
        async function lodeBike() {
            const data = await axios.get('https://own-project-server.onrender.com/bikes')

            if (data?.status == 200) {
                setBikes(data?.data)
            }
        }

        lodeBike()
    }, [user])
    // Delete Function
    const handleDeleteBike = (id) => {
        setBikes(bikes.filter((bike) => bike._id !== id));
    }

    // Search bikes
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    // signOut 
    const handleSignOut = () => {
        const successSignOut = signOut();
        if (successSignOut) {
            alert('Do you want to logout...?')
            toast.success('Successfully Logout')

        }
    }
    return (
        <div>
            {/* bike card details  */}
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className=" text-4xl"><span className="font-bold">Bike</span> <span className="text-red-400 font-semibold">WareHouse</span></a>
                </div>
                <div className="flex-none justify-center gap-2">


                    <div className="form-control ">
                        <input
                            type="text"
                            onChange={handleSearch}
                            placeholder="Search"
                            className="input input-bordered   mx:w-full"
                        />
                    </div>



                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL || '../../../public/user-profile-icon-free-vector.jpg'} />                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li >
                                <Link to={'/dashboard/DashboardHome'} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleSignOut}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>

                <h1 className="text-5xl text-center py-12">Manage All Products ...</h1>
                <div className="grid px-5  grid-cols-1 md:grid-cols-1 md:mx-w-full lg:grid-cols-3 justify-items-center lg:gap-2">
                    {
                        bikes?.filter((bike) => {
                            return searchTerm.toLowerCase() === '' ? bike
                                :
                                bike?.title.toLowerCase().includes(searchTerm);
                        })?.map(bike =>
                            <DashboardBikeCard
                                key={bike?._id}
                                bike={bike}
                                oneDelete={handleDeleteBike}
                            />
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default AllProducts;