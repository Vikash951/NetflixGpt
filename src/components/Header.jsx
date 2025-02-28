import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser , removeUser } from "../utils/userSlice";
import { LOGO , USER_ICON } from "../utils/constant";
import { clearGptMovieResults, toggleGptSearchView } from "../utils/gptSlice";
import { supportedLanguages } from "../utils/languageConstant";
import {changeLanguage} from "../utils/configSlice";



const Header = () =>{

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector((store) => store.user);
   // console.log(user);

   const showGptSearch = useSelector((store) => store.gpt.gptSearchView);

    
   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
    
                // Prevent unnecessary navigation
                if (window.location.pathname !== "/browse") {
                    navigate("/browse");
                }
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
    
        return () => unsubscribe(); // Cleanup function to remove the listener
    }, [dispatch, navigate]);

   
    
   const handleSignOut = () =>{

        console.log("signed out");
        
       signOut(auth).then(() => {
            //Sign-out successful.
            navigate("/");
            
       }).catch((error) => {
           // An error happened.
           console.log(error);
        });
   }

   const handleGptSearch = () =>{
        if(showGptSearch){
            dispatch(clearGptMovieResults())
        }
        dispatch(toggleGptSearchView());
   }

   const handleLanguageChange = (e) => {
       //console.log(e.target.value);
       dispatch(changeLanguage(e.target.value));
   }


    return (
        <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between ">
            <img className="w-48 h-20 m-2" src={LOGO} alt="logo" />
            {user && <div className="flex gap-2 mt-4">
               {showGptSearch && <select className="bg-red-600 text-white p-2 h-10 px-4 mt-2 rounded-lg" onChange = {handleLanguageChange}>
                    {supportedLanguages.map((language) => (<option key = {language.identifier} value = {language.identifier}>{language.name}</option>))} 
                </select> }
                <button onClick={handleGptSearch }  className="bg-red-600 p-2 px-4 h-10 mt-2 rounded text-white">{showGptSearch ? "Home" : "Gpt Search"}</button>
                <img className="w-10 mt-2 h-10  rounded" src= {USER_ICON} alt="user" />
                <button onClick= { handleSignOut} className="bg-red-600 p-2 px-4 h-10 mt-2 rounded text-white">Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;