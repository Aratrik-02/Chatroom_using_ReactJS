import React from "react";
import GoogleButton from "react-google-button";
import {auth} from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// import firebase from "firebase/app"

const style={
    wrap: `flex justify-center items-center h-screen`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // auth.signInWithPopup(provider);
    signInWithRedirect(auth,provider);
}

const SignIn = () => {
    return (
        <div className={style.wrap}>
            <GoogleButton onClick={googleSignIn} style={{width:"200px"}}/>
            {/* <GoogleButton onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} /> */}
        </div>
    );
}

export default SignIn;