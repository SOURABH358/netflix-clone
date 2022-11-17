import React, {useState} from "react";
import { FaPlus } from "react-icons/fa";

export default function Faq__card({ props }) {
    const [display, setDisplay] = useState(false);

    return <div className={`faq__card ${display?'display': ''}`} key={props.id}>
        <div className="faq__question">
            <p>{props.question}</p>
            <div onClick={()=>setDisplay(!display)}><FaPlus /></div>
        </div>
        <div className="faq__answer">
            <p>{props.answer}</p>
        </div>
    </div>
}