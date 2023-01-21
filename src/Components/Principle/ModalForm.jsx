import './form.css';
import CloseCross from '../Controls/CloseCross.jsx';

function ModalForm(props) {

    return (
        <>
            <div className={`${"fullsize-wraper"} ${"modal-form"}`}>
                <div className='fullsize-background' style={props.opacityBack} />
                <div
                    className="modal"
                    style={props.modalStyle}    
                >
                    <>
                        <h3>{props.howItWorks.form.header}</h3>
                        <form method="post" action="https://formspree.io/milichihin@gmail.com" target="_blank">
                            <input
                                type="text"
                                name="name"
                                placeholder={props.howItWorks.form.namePlaceholder}
                                className="input-field">

                            </input>
                            <input
                                type="text"
                                name="email"
                                placeholder={props.howItWorks.form.emailPlaceholder}
                                className="input-field">

                            </input>
                            <textarea
                                type="text"
                                rows="5" cols="21"
                                placeholder={props.howItWorks.form.textareaPlaceholder}
                                name="message"
                                className={`${"textarea"} ${"input-field"}`}>

                            </textarea>
                            <input
                                type="submit"
                                value={props.howItWorks.form.buttonValue}
                                className="button">

                            </input>
                        </form>
                        <h3 style={{ fontWeight: '300' }}>{props.howItWorks.form.ps} </h3>
                    </>
                </div>
                <CloseCross styles={props.opacityPic} onClick={props.hideModal}/>
            </div>
        </>
    );
}

export default ModalForm;
