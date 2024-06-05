import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUserProfile = () => {

    const { id } = useParams();
    const data = useLoaderData();
    console.log(data)
    console.log(id)
    const [userDetails, setUserDetails] = useState()
    console.log(userDetails)

    useEffect(() => {
        async function load() {
            // profile details get Edit
            const userData = await axios.get(`http://localhost:5000/user/get/${id}`)
            if (userData.status == 200) {
                setUserDetails(userData.data)
            }
        }
        load();

    }, [id])

    const handleSubmit = async (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const age = form.age.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const photoURL = form.phoneURL.value;

        const userData = {
            name,
            age,
            phoneNumber,
            email,
            photoURL
        }
        console.log(userData)

        // Profile Update
        fetch(
            `http://localhost:5000/user/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(userData),

            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data)
                    alert('Do you want to update your profile?')
                    toast.success("Your Profile Successfully....!")
                }
            });

    }

    return (
        <div>
            <h1 className="text-5xl font-bold text-center text-blue-950">Edit Your Profile</h1>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">UserName</span>
                    </label>
                    <input
                        defaultValue={userDetails?.name}
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">User Email</span>
                    </label>
                    <input
                        defaultValue={userDetails?.email}
                        type="text"
                        name="email"
                        disabled
                        placeholder="email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">User Age</span>
                    </label>
                    <input
                        type="text"
                        name="age"

                        placeholder="Age"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">User Phone Number</span>
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="+880 1700-123400"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl">User Photo URL</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={userDetails?.photoURL}
                        name="phoneURL"
                        placeholder="Photo URL"
                        className="input input-bordered"
                        required
                    />
                </div>

                <div className="form-control  mt-5">
                    <button className="btn btn-outline bg-blue-950 font-bold text-white">Login</button>
                </div>
                <div className="divider divider-neutral ">or</div>
            </form>
        </div>
    );
};

export default EditUserProfile;