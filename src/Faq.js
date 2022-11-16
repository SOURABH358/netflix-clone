import React from "react";
import { FaPlus } from "react-icons/fa";
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
    </section>
}

export default Faq