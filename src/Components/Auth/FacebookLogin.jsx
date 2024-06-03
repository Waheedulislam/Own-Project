import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FacebookLogin = () => {
    const [signInWithFacebook, user] =
        useSignInWithFacebook(auth);
    const navigate = useNavigate();

    const handleSignInWithFacebook = () => {
        signInWithFacebook();
    };
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])

    return (
        <div>
            <div>
                <button onClick={handleSignInWithFacebook} className="btn btn-primary w-full">Login With Facebook</button>
            </div>
        </div>
    );
};

export default FacebookLogin;
