import React, {useState} from "react";
import {SlArrowRight} from "react-icons/sl"
import Netflix__data from './data'
import Faq__card from './Faq__card';
import './Faq.css'
function Faq() {

    return <section className="faq__section">
        <p className="faq__title">Frequently Asked Questions</p>
        <div className="faqs__container">
            {Netflix__data.faq.map((el,index)=>{
                return <Faq__card 
                props = {el}
                />
            })}
        </div>
        <div className="faq__email__form">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
                <input type="email" placeholder = "Email address"/>
                <button type="button">Get Started <SlArrowRight/></button>
            </form>
        </div>
    </section>
}

export default Faq