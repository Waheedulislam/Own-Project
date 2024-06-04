import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Auth/GoogleLogin";
import auth from "../../Firebase/firebase.config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import FacebookLogin from "../Auth/FacebookLogin";
import axios from "axios";

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/'
    // create user 
    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const name = form.name.value
        const password = form.password.value;

        createUserWithEmailAndPassword(email, password).then((data) => {
            if (data?.user?.email) {
                const userInfo = {
                    email: data?.user?.email,
                    name: name
                }

                axios.post('http://localhost:5000/user', userInfo)
            }
        })
    };

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [navigate, user, from])
    console.log(user, loading, error)

    return (
        <div>
            <div className="hero  bg-base-200 mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-blue-950">Register Now..!</h1>
                        <p className="py-6 text-blue-950">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                            et a id nisi.
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">

                            {/* Name  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            {/* password  */}
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
                                    Already have an account?
                                    <Link to={"/login"} className="text-xl text-purple-700 pl-2">
                                        Login
                                    </Link>
                                </p>{" "}
                            </label>
                            <div className="form-control ">
                                <button className="btn btn-outline bg-blue-950 font-bold text-white">Register</button>
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

export default Register;
