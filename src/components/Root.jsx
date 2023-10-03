import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Root = () => {
    const { user, logOut } = useContext(AuthContext);

    // handle logout
    const handleLogout = () => {
        logOut().then(result => console.log(result)).catch(err => console.log(err));
    }

    return (
        <div>
            {/* navbar start */}
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">M-9 Conceptual </a>
                </div>
                <div className="flex-none">
                    <ul className="flex gap-4">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/signin"}>Sign In</NavLink>
                        <NavLink to={"signup"}>Sign Up</NavLink>
                        {user && <NavLink to={"blog"}>Blog</NavLink>}
                        <div className="">
                            {user ? <button onClick={handleLogout}>LogOut</button> :
                                <Link to={"/signin"}>Login</Link>}
                        </div>
                    </ul>
                </div>
            </div>
            {/* navbar end */}


            {/* Outlet  */} <div className=""><Outlet /></div> {/* Outlet  */}

        </div>
    );
};

export default Root;