import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignIn = () => {

    const { googleLogin, signInWithEmailPass, gitHubLogin } = useContext(AuthContext)

    // signIn With Email And Password
    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailPass(email, password).then(result => console.log(result.user)).catch(err => console.log(err))

    }

    // sign in with socialMedia
    const handleSocialLogin = (media) => {
        media().then(result => console.log(result.user)).catch(err => console.log(err))
    };

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col w-96">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLoginForm}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <button onClick={() => handleSocialLogin(googleLogin)}>SignIn with Google</button>
                        <button onClick={() => handleSocialLogin(gitHubLogin)}>SignIn with GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;