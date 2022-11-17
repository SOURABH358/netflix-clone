import React, {useState} from "react";
import { FaPlus } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";

export default function Faq__card({ props }) {
    const [display, setDisplay] = useState(false);

    return <div className={`faq__card ${display?'display': ''}`} key={props.id}>
        <div className="faq__question">
            <p>{props.question}</p>
            <div onClick={()=>setDisplay(!display)}>{display?<SlArrowDown/>:<FaPlus/>}</div>
        </div>
        <div className="faq__answer">
            {props.answer.split('\n').map(el=> <><p>{el}</p><br/></>)}
        </div>
    </div>
}