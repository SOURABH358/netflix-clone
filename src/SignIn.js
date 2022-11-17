import React from "react";
import SignInNav from "./components/SignInNav";
import SignInForm from "./components/SignInForm";
import './SignIn.css';
function SignIn(){
    return <>
        <SignInNav/>
        <SignInForm/>
    </>
}

export default SignIn;