import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PreviteRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <h1 className="text-4xl">Loading</h1>

    if (!user?.email) {
        return <Navigate to={"/signin"} />
    } else return children
};

export default PreviteRoute;