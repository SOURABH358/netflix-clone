import React from "react";
import { FaPlus } from "react-icons/fa";
import {SlArrowRight} from "react-icons/sl"
import Netflix__data from './data'
import './Faq.css'
function Faq() {

    function getAllFaqs() {
        return Netflix__data.faq.map((el,index) => {

            return <div className="faq__card" key={index}>
                <div className="faq__question">
                    <p>{el.question}</p>
                    <FaPlus/>
                </div>
                <div className="faq__answer">
                    <p>{el.answer}</p>
                </div>
            </div>
        })
    }
    return <section className="faq__section">
        <p className="faq__title">Frequently Asked Questions</p>
        <div className="faqs__container">
            {getAllFaqs()}
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