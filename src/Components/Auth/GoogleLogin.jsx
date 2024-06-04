import { useEffect } from "react";
import auth from "../../Firebase/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const handleSignInWithGoogle = () => {
        signInWithGoogle().then((data) => {
            if (data?.user?.email) {
                const userInfo = {
                    email: data?.user?.email,
                    name: data?.user?.displayName,
                }
                // fetch('http:localhost:5000/user', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(userInfo)
                // }).then(res => res.send())
                //     .then(data => console.log(data))

                axios.post('http://localhost:5000/user', userInfo)
            }
        })

    }
    console.log(user, error, loading)

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