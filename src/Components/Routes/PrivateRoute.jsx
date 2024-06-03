import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import LoadingSpinner from "../Shared/LoadingSpinner";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div><LoadingSpinner></LoadingSpinner></div>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} />
};

export default PrivateRoute;