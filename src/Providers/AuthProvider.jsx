import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const googleProvier = new GoogleAuthProvider();
const gitHubProvier = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // google Login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvier);
    };

    // GitHub Login
    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvier);
    }

    // signUp With Email an password
    const signUpWithEmlPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signIn with Email and password 
    const signInWithEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // upddate user profile
    const handleUpdateProfile = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
    }

    // logOut
    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false);

        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authentication = { signUpWithEmlPass, googleLogin, signInWithEmailPass, gitHubLogin, handleUpdateProfile, logOut, user, loading }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;