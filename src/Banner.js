import React from "react";
import './Banner.css'
import Navbar from "./navbar";
import {SiAccenture} from "react-icons/si"

function Banner() {
    return <section className="banner__section">
        <Navbar/>
        <div className="hero__container">
            <h1 className="hero__title">Unlimited movies, TV shows and more.</h1>
            <p className="hero__subtitle">Watch anywhere. Cancel anytime</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="email__form">
                <input type = "email" placeholder="Email address"></input>
                <button type = "button">Get Started <SiAccenture/></button>
            </form>
        </div>
    </section>
}

export default Banner;