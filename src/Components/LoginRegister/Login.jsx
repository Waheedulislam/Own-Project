import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../Auth/GoogleLogin";
import auth from "../../Firebase/firebase.config";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import FacebookLogin from "../Auth/FacebookLogin";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    };
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])
    console.log(loading, error)
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                            et a id nisi.
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <label className="label">
                                <p className="text-md">
                                    Do not have any account ?
                                    <Link
                                        to={"/register"}
                                        className="text-xl text-purple-700 pl-2"
                                    >
                                        Register
                                    </Link>
                                </p>{" "}
                            </label>
                            <div className="form-control ">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="divider divider-neutral ">or</div>
                        </form>
                        <div>
                            <div className="mx-7 mb-5">
                                <GoogleLogin />
                            </div>
                            <div className="mx-7 mb-5">
                                <FacebookLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
