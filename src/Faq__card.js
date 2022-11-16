export default function Faq__card({ ...props }) {

    return <div className="faq__card" key={id}>
        <div className="faq__question">
            <p>{question}</p>
            <div><FaPlus /></div>
        </div>
        <div className="faq__answer">
            <p>{answer}</p>
        </div>
    </div>
}