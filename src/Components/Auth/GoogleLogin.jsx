import { useEffect } from "react";
import auth from "../../Firebase/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const handleSignInWithGoogle = () => {
        signInWithGoogle()

    }
    console.log(user, error, loading)

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    return (
        <div>
            <button onClick={handleSignInWithGoogle} className="btn btn-primary w-full">Login With Google</button>
        </div>
    );
};

export default GoogleLogin;