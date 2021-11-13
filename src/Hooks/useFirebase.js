import { useState, useEffect } from "react"
import firebaseInit from './../Firebase/firebaseInit';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import swal from "sweetalert";
import axios from "axios";

firebaseInit();

const useFirebase = () => {
    const [firebaseData, setFirebaseData] = useState({});
    const [firebaseError, setFirebaseError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("Login");
    const [userData, setUserData] = useState({});
    const [gender, setGender] = useState("");
    const errorMessage = (message) => swal("Oppos!", `${message}`, "warning");
    const successMessage = () => swal(`Welcome to Luxury Car`, "You are successfully signed", "success");

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

        {
            type: "text",
            name: "phone",
            placeholder: "phone",
        },

        {
            type: "text",
            name: "city",
            placeholder: "city",
        },

        {
            type: "text",
            name: "address1",
            placeholder: "address 1",
        },

        {
            type: "text",
            name: "address2",
            placeholder: "address 2",
        },


    ];

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
    const googleSignIn = (history, redirect_Uri) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                setFirebaseError("");
                saveUser(displayName, email, 'PUT' );
                setFirebaseData(result.user);
                successMessage();
                history.push(redirect_Uri);

            }).catch((error) => {
                setFirebaseError(error.message);
                errorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // sign in  
    const signInUser = (logingEmail, logingPassword, logingPassword2, history, redirect_Uri, passwordNotMatched) => {
        setIsLoading(true);
        if (logingPassword !== logingPassword2) {
            passwordNotMatched();
            setIsLoading(false);
            return;
        }
        signInWithEmailAndPassword(auth, logingEmail, logingPassword)
            .then(res => {
                setFirebaseError("");
                //const data = res.user;
                //data.gender = gender;
                setFirebaseData(res.user);
                successMessage();
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

    //// update user
    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        })
    }

    // sign up  
    const signUpUser = (name, email, password, setName) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                updateUser(name);
                setFirebaseError("");
                setFirebaseData(res.user);
                saveUser(name, email, 'POST');
                setName("Login")
                logOut();
            })

            .catch((error) => {
                setFirebaseError(error.message);
                errorMessage(error.message);
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


    // save user to db
    const saveUser = (name, email, method) => {
        const user = { name, email };
        fetch("https://fierce-everglades-12105.herokuapp.com/add_user_data", {
            method: method,
            headers: {
                'content-type': "application/json" 
            },
            body: JSON.stringify(user)
        }).then(res => {

        }).catch(err => {
            });

/*
        axios.post("https://fierce-everglades-12105.herokuapp.com/add_user_data", { user }
        ).then(res => {

        })
            .catch(err => {
            });*/
    }
//
//    const saveGoogleUser = (name, email) => {
//        const user = { name, email };
//        axios.put("https://fierce-everglades-12105.herokuapp.com/add_user_data", { user }
//        ).then(res => {
//
//        })
//            .catch(err => {
//            });
//    }


    return { userData, setUserData, handleUserData, inputData, googleSignIn, signInUser, logOut, signUpUser, isLoading, firebaseError, firebaseData, name, setName, setGender }
}

export default useFirebase;