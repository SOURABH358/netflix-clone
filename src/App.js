import React from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./Banner";
import SignIn from "./SignIn";
export default function App(){
    return (
        <>
            
            <Routes>
                <Route path="/" element = {<Banner/>}/>
                <Route path = "/sign-in" element={<SignIn/>}/>
            </Routes>
        </>
    )
}