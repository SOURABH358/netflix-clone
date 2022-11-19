import React from "react";
import SignInNav from "./components/SignInNav";
import SignInForm from "./components/SignInForm";
import './SignIn.css';
function SignIn(){
    return <section className="SignIn__section">
        <SignInNav/>
        <SignInForm/>
    </section>
}

export default SignIn;