import React from "react";
import SignInNav from "../components/SignInNav";
import SignInForm from "../components/SignInForm";
import SignInFooter from "../components/SignInFooter";
import './SignIn.css';
function SignIn(){
    return <section className="SignIn__section">
        <SignInNav/>
        <SignInForm/>
        <SignInFooter/>
    </section>
}

export default SignIn;