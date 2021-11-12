import { useState, useEffect } from "react"
import firebaseInit from './../Firebase/firebaseInit';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import swal from "sweetalert";

firebaseInit();

const useFirebase = () => {
    const [userData, setUserData] = useState({});
    const [firebaseData, setFirebaseData] = useState({});
    const [firebaseError, setFirebaseError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("Login");
    const [gender, setGender] = useState("");
    const errorMessage = (message) => swal("Oppos!", `${message}`, "warning");

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
    const signInUser = (history, redirect_Uri, successMeassage, passwordNotMatched) => {
        setIsLoading(true);
        if (userData.logingPassword !== userData.logingPassword2) {
            passwordNotMatched();
            setIsLoading(false);
            return;
        }
        signInWithEmailAndPassword(auth, userData?.logingEmail, userData?.logingPassword)
            .then(res => {
                setFirebaseError("");
                //const data = res.user;
                //data.gender = gender;
                setFirebaseData(res.user);
                successMeassage();
                history.push(redirect_Uri);
            })
            .catch((error) => {
                setFirebaseError(error.message);
                errorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    // update user
    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: userData?.registerName
        }).then(res => {

        });
    }

    // sign up  
    const signUpUser = () => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, userData?.registerEmail, userData?.registerPassword)
            .then(res => {
                updateUser();
                setFirebaseError("");
                setFirebaseData(res.user);
                logOut();
            })
            .catch((error) => {
                setFirebaseError(error.message);
                console.log(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    //logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setFirebaseData({});
            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    // user observer 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFirebaseData(user);
            } else {
                setFirebaseData({});
            }
            setIsLoading(false);
        })
    }, [])


    return { userData, setUserData, handleUserData, inputData, googleSignIn, signInUser, logOut, signUpUser, isLoading, firebaseError, firebaseData, name, setName, setGender }
}

export default useFirebase
