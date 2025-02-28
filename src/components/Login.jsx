import { useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useRef } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"
import { BG_URL } from "../utils/constant";


const Login = () => {

    const [signInText , setSignInText] = useState(true);

    const [errorMessage , setErrorMessage] = useState(null);

   
   const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

   const handleButtonClick = ()=>{
        const message = checkValidData(email.current.value , password.current.value)
        setErrorMessage(message);

        if(message){
            return;
        }

        if(signInText){
            //sign in 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage + "-" + errorCode)
            });
        }
        else{
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
                // Signed up 
               const user = userCredential.user;

               updateProfile(user, {
                    displayName: name.current.value , 
                }).then(() => {
                    // Profile updated!
                    const {uid , email, displayName } = auth.currentUser;
                    dispatch(
                        addUser({
                            uid : uid, 
                            email : email,
                            displayName : displayName
                        })
                    )

                }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                });
               
                
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage + "-" + errorCode);
            });
        }
   }
   
   
    const toggleSignInForm = () =>{
        
            setSignInText(!signInText);
    }

    return (
        <div className="relative h-screen">
            <Header />
            {/* Background Image */}
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover" 
                     src= {BG_URL}
                     alt="Netflix Background" />
            </div>

            {/* Centered Sign-In Form */}
            <div className="absolute inset-0 flex justify-center items-center">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col bg-black opacity-70 text-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-3xl font-bold my-8">{signInText === true ? "Sign In" : "Sign Up"}</h2>
                    {signInText === false &&
                        <input ref = {name} className="p-3 border border-gray-700 rounded mb-3" type="text" placeholder="Full Name" /> 
                        
                    }
                    <input ref={email} className="p-3 border border-gray-700 rounded mb-3 " type="text" placeholder="Email Address" />
                    <input ref={password} className="p-3 border border-gray-700 rounded mb-3" type="password" placeholder="Password" />
                    <p className="mb-3 text-red-600 text-lg font-bold">{errorMessage}</p>
                    <button className="bg-red-600 text-white py-2 rounded hover:bg-red-950 duration-500" onClick={handleButtonClick}>{signInText === true ? "Sign In" : "Sign Up"}</button>
                    <p className="mx-auto text-lg my-3 text-white">Forget password?</p>
                    <div className="flex gap-2">
                        <div className="text-gray-400">{signInText === true ?"New to Netflix?": "Already a user?"} </div>
                        <div className="text-white cursor-pointer" onClick={() => toggleSignInForm()}>{signInText === true ? "Sign up now" : "Sign in now"}</div>
                    </div>
                    <span className="text-sm mt-5 text-gray-400">This page is protected by Google reCAPTCHA to</span>
                    <span className="text-sm text-gray-400 inline-flex items-center">
                        Ensure you are not a bot.
                        <span className="text-blue-500 underline cursor-pointer ml-1">Learn more</span>
                    </span>

                </form>
            </div>
        </div>
    );
}

export default Login;
