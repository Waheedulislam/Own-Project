import { useEffect } from "react";
import auth from "../../Firebase/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
const GoogleLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const handleSignInWithGoogle = () => {
        signInWithGoogle().then((data) => {
            if (data?.user?.email) {
                const userInfo = {
                    email: data?.user?.email,
                    name: data?.user?.displayName,
                    photoURL: data?.user?.photoURL
                };
                // Method 1 : simple fetch
                fetch("https://own-project-server.onrender.com/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then((res) => res.json())
                    .then((data) => localStorage.setItem('token', data?.token))


                //Method 2 : axios

                // const success = axios.post('https://own-project-server.onrender.com/user', userInfo, {

                // })
                // if (success) {
                //     localStorage.setItem('token', success?.data?.token)
                //     console.log(success)
                // }

            }
        })

    }
    console.log(user)

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    return (
        <div>
            <button onClick={handleSignInWithGoogle} className="btn btn-outline bg-blue-950 font-bold text-white w-full">Login With Google</button>
        </div>
    );
};

export default GoogleLogin;