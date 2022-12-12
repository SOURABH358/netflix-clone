import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import SignIn from "./pages/SignIn";
export default function App(){
    return (
        <>
            
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path = "sign-in" element={<SignIn/>}/>
                <Route path = "movies" element ={<Movies/>}/>
            </Routes>
        </>
    )
}