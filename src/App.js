import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
export default function App(){
    return (
        <>
            
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path = "/sign-in" element={<SignIn/>}/>
            </Routes>
        </>
    )
}