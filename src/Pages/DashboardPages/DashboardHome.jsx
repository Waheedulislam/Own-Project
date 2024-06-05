import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState();
    console.log(userInfo)
    // useEffect(() => {
    //     fetch(`http://localhost:5000/user/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => setUserInfo(data))
    // }, [user])

    useEffect(() => {
        async function load() {
            const data = await axios.get(`http://localhost:5000/user/${user?.email}`);

            if (data?.status == 200) {
                setUserInfo(data?.data);
            }
        }
        load();
    }, [user]);
    return (
        <div>
            <div className="hero mt-10 w-ful h-full  bg-base-300">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="avatar">
                        <div className="w-96 rounded">
                            <img
                                src={
                                    userInfo?.photoURL ||
                                    "../../../public/user-profile-icon-free-vector.jpg"
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className=" font-bold flex gap-2 text-5xl ">
                            Name : <p className="text-blue-950 ">{userInfo?.name}</p>
                        </h1>
                        <h3 className="py-6 flex text-2xl font-bold">
                            Email : <h6 className="pl-2"> {userInfo?.email}</h6>
                        </h3>
                        <button className="btn bg-blue-950 text-white  font-bold">
                            <Link to={`/dashboard/profile/edit/${userInfo?._id}`}>Edit Your Profile</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
