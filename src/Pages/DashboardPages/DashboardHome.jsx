import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const DashboardHome = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState();


    // useEffect(() => {
    //     fetch(`http://localhost:5000/user/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((data) => setUserInfo(data))
    // }, [user])

    useEffect(() => {
        async function load() {
            const data = await axios.get(`http://localhost:5000/user/${user?.email}`)

            if (data?.status == 200) {
                setUserInfo(data?.data)
            }
        }
        load()
    }, [user])
    return (
        <div>
            <div className="hero mt-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="avatar">
                        <div className="w-80 rounded">
                            <img src={userInfo?.photoURL || "../../../public/user-profile-icon-free-vector.jpg"} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Name : {userInfo?.name}</h1>
                        <h3 className="py-6 flex text-xl">Email :  <h6> {userInfo?.email}</h6></h3>
                        <button className="btn btn-primary"><Link to={'/dashboard/manage-recipe'}>Go to Product Page</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;