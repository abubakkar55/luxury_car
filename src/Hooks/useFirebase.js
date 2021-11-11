import { useState, useEffect } from "react"
import firebaseInit from './../Firebase/firebaseInit';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
firebaseInit();

const useFirebase = () => {
    const [userData, setUserData] = useState({});
    const [firebaseData, setFirebaseData] = useState({});
    const [firebaseError, setFirebaseError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const inputData = [
        {
            type: "email",
            name: "logingEmail",
            placeholder: "email",
        },
        {
            type: "password",
            name: "logingPassword",
            placeholder: "password",
        },
        {
            type: "password",
            name: "logingPassword2",
            placeholder: "Re-type password",
        },
        {
            type: "text",
            name: "registerName",
            placeholder: "Name",
        },
        {
            type: "email",
            name: "registerEmail",
            placeholder: "email",
        },
        {
            type: "password",
            name: "registerPassword",
            placeholder: "password",
        },
    ];

    // colletc dat from user
    const handleUserData = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...userData };
        newData[field] = value;
        setUserData(newData);
    }

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const googleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setFirebaseError("");
                setFirebaseData(result.user);
            }).catch((error) => {
                setFirebaseError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // sign in  
    const signInUser = () => {
        setIsLoading(true)
        signInWithEmailAndPassword(userData?.logingEmail, userData?.logingPassword)
            .then(res => {
                setFirebaseError("");
                setFirebaseData(res.user);
            })
            .catch((error) => {
                setFirebaseError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    // update user
    const updateUser = () => {
        updateProfile(auth, {
            displayName: userData?.registerName
        }).then(res => {

        });
    }

    // sign up  
    const signUpUser = () => {
        setIsLoading(true)
        createUserWithEmailAndPassword(userData?.registerEmail, userData?.registerPassword)
            .then(res => {
                updateUser();
                setFirebaseError("");
                setFirebaseData(res.user);
            })
            .catch((error) => {
                setFirebaseError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    //logout
    const logOut = () => {
        signOut(auth)
            .then(res => {
                setFirebaseData({});
            })
    }


    // user observer 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFirebaseData(user);
            } else {
                setFirebaseData({});
            }
        })
    }, [])


    return { userData, setUserData, handleUserData, inputData, googleSignIn, signInUser, logOut, signUpUser, isLoading, firebaseError, firebaseData }
}

export default useFirebase
