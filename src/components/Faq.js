import {SlArrowRight} from "react-icons/sl"
import Netflix__data from '../data'
import FaqCard from './Faq__card';
import './Faq.css'
function Faq() {

    return <section className="faq__section">
        <p className="faq__title">Frequently Asked Questions</p>
        <div className="faqs__container">
            {Netflix__data.faq.map((el,index)=>{
                return <FaqCard 
                props = {el}
                />
            })}
        </div>
        <div className="faq__email__form">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
                <input type="email" placeholder = "Email address"/>
                <button type="button">Get Started <SlArrowRight className="fa"/></button>
            </form>
        </div>
    </section>
}

export default Faq