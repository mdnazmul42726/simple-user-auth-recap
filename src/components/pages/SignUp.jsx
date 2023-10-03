import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    // use context data from ../../Providers/AuthProvider
    const { signUpWithEmlPass, googleLogin, gitHubLogin, handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    // signUp with email and password
    const hanleSignUpForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signUpWithEmlPass(email, password).then(() => {
            handleUpdateProfile(name).then(() => alert('jkskk'), navigate("/")).catch(err => console.log(err));


        }).catch(err => console.log(err));

    }


    // handle social login
    const handleSocialLogin = (media) => {
        media().then(result => {
            handleUpdateProfile(result.user.displayName).then(() => alert('name upate'), navigate("/")).catch(err => console.log(err))
        }).catch(err => console.log(err));
    };


    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col w-96">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={hanleSignUpForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <button onClick={() => handleSocialLogin(googleLogin)}>SignIn With Google</button>
                        <button onClick={() => handleSocialLogin(gitHubLogin)}>SignIn With GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;