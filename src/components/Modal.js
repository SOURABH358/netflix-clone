import "./Modal.css"
const Modal = ({setModal, movie})=>{
    return <section className="modal__section">
        <div className="layover" onClick={()=>{setModal(false)}}></div>
        <div></div>
    </section>
}

export default Modal